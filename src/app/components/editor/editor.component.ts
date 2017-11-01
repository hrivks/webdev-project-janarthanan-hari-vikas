import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MarkdownElement, MarkdownElementType, MarkdownElementFactory, MarkdownElementHeading } from '../../model/model';
declare var $; // jquery
declare var tinymce: any; // tinyMCE editor
declare var toMarkdown: any; // to-markdown

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditorComponent implements OnInit {

  // properties
  private markdownHtml: string;
  private editor: any;
  @ViewChild('inputArea') inputArea: ElementRef;

  constructor(private zone: NgZone) { }

  ngOnInit() {
    // initialize TinyMCE editor
    // tinymce.init({
    //   target: this.inputArea.nativeElement,
    //   theme: 'modern',
    //   plugins: 'table link lists hr stylebuttons emoticons image',
    //   autoresize_bottom_margin: 10,
    //   height: window.innerHeight - 115,
    //   menubar: false,
    //   toolbar: 'style-p style-h1 style-h2 style-h3 style-h4 style-h5 style-h6 style-code '
    //   + '| bold italic strikethrough | numlist bullist | link image | table | alignleft aligncenter alignright | hr | colAlignRight',
    //   branding: false,
    //   statusbar: false,
    //   link_title: false,
    //   target_list: false,
    //   table_toolbar: 'tabledelete | tableinsertrowbefore tableinsertrowafter tabledeleterow'
    //   + ' | tableinsertcolbefore tableinsertcolafter tabledeletecol',
    //   table_appearance_options: false,
    //   table_advtab: false,
    //   table_cell_advtab: false,
    //   table_row_advtab: false,
    //   table_default_styles: {
    //     width: '100%'
    //   },
    //   setup: function (ed) {

    //     ed.addButton('colAlignRight', {
    //       icon: 'alignright',
    //       tooltip: 'Right Align column',
    //       onclick: () => {
    //         const activeNode = ed.selection.getNode();
    //         if (activeNode.localName === 'td') {
    //           const colIndex = activeNode.cellIndex;
    //           const tbl = activeNode.parentElement.parentElement;
    //           // set all td in all rows at colIndex to same alignment
    //           for (let i = 0; i < tbl.rows.length; i++) {
    //             tbl.rows[i].cells[colIndex].align = 'right';
    //           }
    //         }
    //       }

    //     });


    //     ed.on('init', function () {
    //       ed.buttons.table.menu.splice(1, 1);
    //       ed.buttons.table.menu.splice(2, 4);
    //     });
    //   },
    //   init_instance_callback: (editor) => {
    //     this.editor = editor;

    //     if (this.markdownHtml) {
    //       editor.setContent(this.markdownHtml);
    //     }

    //     (<any>window).ed = editor;

    //     $(editor.editorContainer).find('.mce-toolbar .mce-btn-group:eq(5)').hide();

    //     editor.on('NodeChange', function (e) {
    //       console.log(e);
    //       if (e.parents.find((p) => p.localName === 'table')) {
    //         $(editor.editorContainer).find('.mce-toolbar .mce-btn-group:eq(2)').hide();
    //         $(editor.editorContainer).find('.mce-toolbar .mce-btn-group:eq(5)').show();
    //       } else {
    //         $(editor.editorContainer).find('.mce-toolbar .mce-btn-group:eq(2)').show();
    //         $(editor.editorContainer).find('.mce-toolbar .mce-btn-group:eq(5)').hide();
    //       }
    //     });

    //     editor.on('KeyUp', () => {
    //       this.onEditorChange();
    //     });

    //     editor.on('ExecCommand', (e) => {
    //       console.log(e);
    //       this.onEditorChange();
    //     });

    //   }
    // });

  }

  onEditorChange() {
    const html = this.editor.getContent();

    this.zone.run(() => {
      this.markdownHtml = html;
    });

  }

  getMarkdown() {
    if (this.markdownHtml) {
      return toMarkdown(this.markdownHtml,
        {
          gfm: true,
          converters: [
            {
              filter: 'span',
              replacement: function (content, node) {
                if (node.getAttribute('style') === 'text-decoration: line-through;') {
                  return '~~' + content + '~~';
                } else {
                  return content;
                }

              }
            },
            {
              filter: 'table',
              replacement: function (content, node) {
                const firstRow = content.substring(0, content.indexOf('\n', 1));
                const colCount = firstRow.split('|').length - 2;
                const headerRow = '\n' + '| --'.repeat(colCount) + '|';
                content = content.replace(firstRow, firstRow + headerRow);
                return content;

              }
            },
            {
              filter: 'pre',
              replacement: function (content, node) {

                if (node.getAttribute('class').indexOf('language-') > -1) {
                  const lang = node.getAttribute('class').replace('language-', '');
                  return '```' + lang + '\n' + content.replace('<code>', '').replace('</code>', '') + '\n```';
                } else {
                  return content;
                }
              }
            }
          ]
        });
    } else {
      return '';
    }

  }

}
