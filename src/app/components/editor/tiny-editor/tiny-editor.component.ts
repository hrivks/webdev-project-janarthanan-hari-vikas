import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter, NgZone, ViewEncapsulation } from '@angular/core';
declare var $; // jquery
declare var tinymce; // tinyMCE editor

@Component({
  selector: 'app-tiny-editor',
  templateUrl: './tiny-editor.component.html',
  styleUrls: ['./tiny-editor.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TinyEditorComponent implements OnInit {

  // properties
  @Input() markdownHtml: string;
  @Output('markdownHtmlChange') markdownHtmlChange = new EventEmitter<string>();
  @ViewChild('tinyEditor') el: ElementRef;

  constructor(private zone: NgZone) { }

  ngOnInit() {
    this.initEditor();
  }

  private initEditor() {

    // initialize TinyMCE editor
    tinymce.init({
      target: this.el.nativeElement,
      theme: 'modern',
      plugins: 'table link lists hr image codesample',
      autoresize_bottom_margin: 10,
      height: window.innerHeight - 115,
      menubar: false,
      toolbar: 'txt h codesample '
      + '| bold italic strikethrough | numlist bullist | link image | table | colAlignLeft colAlignCenter colAlignRight | hr',
      branding: false,
      statusbar: false,
      link_title: false,
      target_list: false,
      table_toolbar: 'tabledelete | tableinsertrowbefore tableinsertrowafter tabledeleterow'
      + ' | tableinsertcolbefore tableinsertcolafter tabledeletecol',
      table_appearance_options: false,
      table_advtab: false,
      table_cell_advtab: false,
      table_row_advtab: false,
      table_default_styles: {
        width: '100%'
      },
      setup: (ed) => {
        this.createCustomToolbarButtons(ed);

        // remove table exta buttons
        ed.on('init', function () {
          ed.buttons.table.menu.splice(1, 1); // remove table properties button
          ed.buttons.table.menu.splice(2, 4); // remove cell, row and column buttons
        });

      },
      init_instance_callback: (editor) => {
        (<any>window).ed = editor; // todo: remove

        if (this.markdownHtml) {
          editor.setContent(this.markdownHtml);
        }

        $(editor.editorContainer).find('.mce-toolbar .mce-btn-group:eq(5)').hide();

        editor.on('NodeChange', (e) => {
          this.onEditorNodeChange(editor, e);
        });

        editor.on('KeyUp', () => {
          this.onEditorChange(editor);
        });

        editor.on('ExecCommand', (e) => {
          this.onEditorChange(editor);
        });

      }
    });

  }

  /**
   * Create custom toolbar buttons
   * @param editor tinyMCE editor object
   */
  private createCustomToolbarButtons(editor: any) {

    // default text button
    editor.addButton('txt', {
      tooltip: 'Text',
      text: 'txt',
      onclick: () => {
        editor.execCommand('mceToggleFormat', false, 'p');
      },
      onPostRender: function () {
        const self = this; // btn reference
        const setup = function () {
          editor.formatter.formatChanged('p', function (state) {
            self.active(state);
          });
        };
        editor.formatter ? setup() : editor.on('init', setup);
      }
    });

    // heading drop down button
    editor.addButton('h', {
      type: 'listbox',
      text: 'H1',
      icon: false,
      onselect: function (e) {
        editor.execCommand('mceToggleFormat', false, this.value());
      },
      values: [
        { text: 'H1', value: 'h1' },
        { text: 'H2', value: 'h2' },
        { text: 'H3', value: 'h3' },
        { text: 'H4', value: 'h4' },
        { text: 'H5', value: 'h5' },
        { text: 'H6', value: 'h6' }
      ],
      onPostRender: function () {
        this.value('h1'); // set default value
      }
    });

    // column alignemnt buttons
    // Right align button
    editor.addButton('colAlignRight', {
      icon: 'alignright',
      tooltip: 'Right Align column',
      onclick: () => {
        const activeNode = editor.selection.getNode();
        if (activeNode.localName === 'td') {
          const colIndex = activeNode.cellIndex;
          const tbl = activeNode.parentElement.parentElement;
          // set all td in all rows at colIndex to same alignment
          for (let i = 0; i < tbl.rows.length; i++) {
            tbl.rows[i].cells[colIndex].align = 'right';
          }
        }
      }
    });

    // Left align button
    editor.addButton('colAlignLeft', {
      icon: 'alignleft',
      tooltip: 'Left Align column',
      onclick: () => {
        const activeNode = editor.selection.getNode();
        if (activeNode.localName === 'td') {
          const colIndex = activeNode.cellIndex;
          const tbl = activeNode.parentElement.parentElement;
          // set all td in all rows at colIndex to same alignment
          for (let i = 0; i < tbl.rows.length; i++) {
            tbl.rows[i].cells[colIndex].align = 'left';
          }
        }
      }
    });

    // Center align button
    editor.addButton('colAlignCenter', {
      icon: 'aligncenter',
      tooltip: 'Center Align column',
      onclick: () => {
        const activeNode = editor.selection.getNode();
        if (activeNode.localName === 'td') {
          const colIndex = activeNode.cellIndex;
          const tbl = activeNode.parentElement.parentElement;
          // set all td in all rows at colIndex to same alignment
          for (let i = 0; i < tbl.rows.length; i++) {
            tbl.rows[i].cells[colIndex].align = 'center';
          }
        }
      }
    });

  }

  /**
   * Perform tasks on node change in editor
   */
  private onEditorNodeChange(editor: any, e: any) {
    if (e.parents.find((p) => p.localName === 'table')) {
      // inside table --> hide bullet btns; show column alignment btns
      $(editor.editorContainer).find('.mce-toolbar .mce-btn-group:eq(2)').hide();
      $(editor.editorContainer).find('.mce-toolbar .mce-btn-group:eq(5)').show();
    } else {
      // outside table --> show bullet btns; hide column alignment btns
      $(editor.editorContainer).find('.mce-toolbar .mce-btn-group:eq(2)').show();
      $(editor.editorContainer).find('.mce-toolbar .mce-btn-group:eq(5)').hide();
    }
  }

  /**
   * Emit changes to editor to subscriber
   */
  private onEditorChange(editor: any) {
    const html = editor.getContent();
    this.zone.run(() => {
      this.markdownHtmlChange.emit(html);
    });

  }
}
