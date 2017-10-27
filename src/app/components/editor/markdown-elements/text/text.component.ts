import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MarkdownElementText } from '../../../../model/model';
declare var Quill: any;
declare var $: any;

@Component({
  selector: 'app-markdown-text-edit',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextEditComponent implements OnInit, AfterViewInit {

  // properties
  @Input() public markdown: MarkdownElementText;
  @Output() public markdownChange: EventEmitter<MarkdownElementText> = new EventEmitter<MarkdownElementText>();

  @ViewChild('txtInput') txtInput: ElementRef;
  @ViewChild('txtToolbar') txtToolbar: ElementRef;
  private quillEditor: any;
  private diff: string;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.quillEditor = new Quill(this.txtInput.nativeElement, {
      theme: 'snow',
      modules: {
        toolbar: { container: this.txtToolbar.nativeElement }
      }
    });

    this.quillEditor.on('text-change', () => {
      let html = $(this.txtInput.nativeElement).find('.ql-editor').html();

      this.diff = html;

      // sanitize html
      html = html.replace(/<p><br><\/p><p><br><\/p>/g, '\n\n');
      html = html.replace(/<p>/g, '');
      html = html.replace(/<\/p>/g, '');
      html = html.replace(/-\[x\]/g, '<br><i class="fa fa-check-square-o"></i>');
      html = html.replace(/-\[ \]/g, '<br><i class="fa fa-square-o"></i>');

      this.markdown.content = html;
    });

    (<any>window).q = this.quillEditor;
    $('[data-toggle="tooltip"]').tooltip();

  }

  onChange() {
    this.markdownChange.emit(this.markdown);
  }

  insertTaskList() {
    let taskHtml = '\n-[x] ';
    const insertIndex = this.quillEditor.getLength() - 1;
    if (insertIndex === 0) {
      taskHtml = '-[x] ';
    }
    this.quillEditor.insertText(this.quillEditor.getLength() - 1, taskHtml);

    $(this.txtToolbar.nativeElement).parent().find('.note').text('remove "x" to create a unchecked task item');
    setTimeout(() => {
      $(this.txtToolbar.nativeElement).parent().find('.note').text('enter key twice creates newline');
    }, 3000);
  }
}
