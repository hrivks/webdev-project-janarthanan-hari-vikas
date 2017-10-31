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
      branding: false,
      menubar: false,
      statusbar: false,
      plugins: [
        'lists link image '
      ],
      toolbar: 'bold italic | bullist numlist | link | image',
      init_instance_callback: (editor) => {
        this.editor = editor;

        if (this.markdown.rawHtml) {
          editor.setContent(this.markdown.rawHtml);
        }

        (<any>window).q = editor;

        editor.on('KeyUp', () => {
          this.onEditorChange();

          // sanitize html
          // html = html.replace(/<p><br><\/p><p><br><\/p>/g, '\n\n');
          // html = html.replace(/<p>/g, '');
          // html = html.replace(/<\/p>/g, '');
          // html = html.replace(/-\[x\]/g, '<br><i class="fa fa-check-square-o"></i>');
          // html = html.replace(/-\[ \]/g, '<br><i class="fa fa-square-o"></i>');

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


  insertTaskList() {
    let taskHtml = '\n-[x] ';
    const insertIndex = this.editor.getLength() - 1;
    if (insertIndex === 0) {
      taskHtml = '-[x] ';
    }
    this.editor.insertText(this.editor.getLength() - 1, taskHtml);

    $(this.txtToolbar.nativeElement).parent().find('.note').text('remove "x" to create a unchecked task item');
    setTimeout(() => {
      $(this.txtToolbar.nativeElement).parent().find('.note').text('enter key twice creates newline');
    }, 3000);
  }
}
