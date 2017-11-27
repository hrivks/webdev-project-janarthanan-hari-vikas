import { Component, OnInit, AfterViewInit, ViewEncapsulation, ViewChild, ElementRef, NgZone } from '@angular/core';
import { concat } from 'rxjs/operator/concat';
import { MarkdownConvertorPipe } from '../../pipes/markdown-convertor/markdown-convertor.pipe';
declare var $; // jquery
declare var tinymce: any; // tinyMCE editor
declare var toMarkdown: any; // to-markdown

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css', '../../../assets/github-markdown.css'],
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

  constructor(private markdownConvertor: MarkdownConvertorPipe) {
    this.compHeight = window.innerHeight - 181;
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

  /** Download markdown file */
  download() {
    const markdown = this.markdownConvertor.transform(this.markdownHtml);
    const textFileAsBlob = new Blob([markdown], { type: 'text/plain' });
    const fileName = 'README.md';

    const downloadLink = document.createElement('a');
    downloadLink.download = fileName;
    downloadLink.innerHTML = 'Download README.md';
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    downloadLink.onclick = (e: any) => { document.body.removeChild(e.target); };
    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);

    downloadLink.click();
  }

}
