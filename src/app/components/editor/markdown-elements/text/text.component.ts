import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MarkdownElementText } from '../../../../model/model';
declare var tinymce: any;
declare var $: any;

@Component({
  selector: 'app-markdown-text-edit',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextEditComponent implements OnInit, AfterViewInit {

  // properties
  @Input() public markdown: MarkdownElementText;

  @ViewChild('txtInput') txtInput: ElementRef;
  @ViewChild('txtToolbar') txtToolbar: ElementRef;
  private editor: any;

  constructor(private zone: NgZone) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    tinymce.init({
      target: this.txtInput.nativeElement,
      theme: 'modern',
      plugins: 'table link lists hr autoresize stylebuttons emoticons image',
      autoresize_bottom_margin: 10,
      menubar: false,
      toolbar: 'style-p style-h1 style-h2 style-h3 style-h4 style-h5 style-h6 style-code'
      + '| bold italic | numlist bullist | link image | table | alignleft aligncenter alignright | hr',
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
      setup: function (ed) {
        ed.on('init', function () {
          ed.buttons.table.menu.splice(1, 1);
          ed.buttons.table.menu.splice(2, 4);
        });
      },
      init_instance_callback: function (editor) {
        this.editor = editor;

        if (this.markdown.rawHtml) {
          editor.setContent(this.markdown.rawHtml);
        }

        (<any>window).ed = editor;

        $(editor.editorContainer).find('.mce-toolbar .mce-btn-group:eq(5)').hide();

        editor.on('NodeChange', function (e) {
          if (e.parents.find((p) => p.localName === 'table')) {
            $(editor.editorContainer).find('.mce-toolbar .mce-btn-group:eq(2)').hide();
            $(editor.editorContainer).find('.mce-toolbar .mce-btn-group:eq(5)').show();
          } else {
            $(editor.editorContainer).find('.mce-toolbar .mce-btn-group:eq(2)').show();
            $(editor.editorContainer).find('.mce-toolbar .mce-btn-group:eq(5)').hide();
          }
        });

        editor.on('KeyUp', () => {
          this.onEditorChange();
        });
      }
    });

  }

  onEditorChange() {
    const html = this.editor.getContent();

    this.zone.run(() => {
      this.markdown.rawHtml = html;
      this.markdown.content = html;
    });

  }

}
