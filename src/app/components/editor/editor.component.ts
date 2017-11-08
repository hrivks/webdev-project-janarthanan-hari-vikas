import { Component, OnInit, AfterViewInit, ViewEncapsulation, ViewChild, ElementRef, NgZone } from '@angular/core';
declare var $; // jquery
declare var tinymce: any; // tinyMCE editor
declare var toMarkdown: any; // to-markdown

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditorComponent implements OnInit, AfterViewInit {

  // properties
  private markdownHtml: string;
  private editor: any;
  @ViewChild('inputArea') inputArea: ElementRef;
  @ViewChild('previewTabBody') previewTabBody: ElementRef;
  private activeTab: string;
  private compHeight: number;
  private loadComplete: boolean;

  constructor(private zone: NgZone) {
    this.compHeight = window.innerHeight - 131;
    this.loadComplete = false;
  }

  ngOnInit() {
    this.activeTab = 'preview';
  }

  ngAfterViewInit() {
  }

  onEditorLoad() {
    this.loadComplete = true;
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

                let headerRow = '\n';

                // check for alignment
                for (let i = 0; i < colCount; i++) {
                  let cellMarkdown = '|--';
                  if (node.rows[0].cells[i].align === 'right') {
                    cellMarkdown = '|--:';
                  } else if (node.rows[0].cells[i].align === 'center') {
                    cellMarkdown = '|:--:';
                  }
                  headerRow += cellMarkdown;
                }
                headerRow += '|';

                content = content.replace(firstRow, firstRow + headerRow);
                return content;

              }
            },
            {
              filter: 'pre',
              replacement: function (content, node) {

                if (node.getAttribute('class') && node.getAttribute('class').indexOf('language-') > -1) {
                  const lang = node.getAttribute('class').replace('language-', '') || '';
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
