import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
declare var Quill: any;
declare var $: any;

@Component({
  selector: 'app-markdown-table-text-edit',
  templateUrl: './table-text.component.html',
  styleUrls: ['./table-text.component.css']
})
export class TableTextEditComponent implements OnInit, AfterViewInit {

  // properties
  @Input() public textData: { value: string, alignment?: string };
  @Output() public textDataChange: EventEmitter<{ value: string, alignment?: string }>
  = new EventEmitter<{ value: string, alignment?: string }>();

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

    if (this.textData.value) {
      $(this.txtInput.nativeElement).find('.ql-editor').html(this.textData.value);
    }

    this.quillEditor.on('text-change', () => {
      let html = $(this.txtInput.nativeElement).find('.ql-editor').html();
      this.diff = html;

      // sanitize html
      html = html.replace(/<p><br><\/p><p><br><\/p>/g, '\n\n');
      html = html.replace(/<p>/g, '');
      html = html.replace(/<\/p>/g, '');

      this.textData.value = html;
    });

    (<any>window).q = this.quillEditor;
    $('[data-toggle="tooltip"]').tooltip();

  }

  onChange() {
    this.textDataChange.emit(this.textData);
  }

}
