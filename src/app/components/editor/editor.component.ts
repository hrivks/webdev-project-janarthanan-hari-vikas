import { Component, OnInit, AfterViewInit, ViewEncapsulation, ViewChild, ElementRef, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarkdownConvertorPipe } from '../../pipes/markdown-convertor/markdown-convertor.pipe';
import { MarkdownService } from '../../services/markdown.service.client';
import { Markdown } from '../../model/model';
import { InteractionsService } from '../../services/interactions.service.client';
import { ErrorHandlerService } from '../../services/error-handler.service.client';

declare var $; // jquery
declare var tinymce: any; // tinyMCE editor
declare var toMarkdown: any; // to-markdown

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css', '../../../assets/github-markdown.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditorComponent implements OnInit {

  // properties
  private markdownId: string;
  private markdownServerObject: Markdown;
  private markdownHtml: string;
  private editor: any;
  @ViewChild('inputArea') inputArea: ElementRef;
  @ViewChild('previewTabBody') previewTabBody: ElementRef;
  @ViewChild('modal') editorModal: ElementRef;
  private activeTab: string;
  private compHeight: number;
  private loadComplete: boolean;

  // modal related
  private openModalKey: string;
  private modals: any; // available modal objects

  constructor(private activatedRoute: ActivatedRoute,
    private markdownService: MarkdownService,
    private interactionService: InteractionsService,
    private errorHandlerService: ErrorHandlerService,
    private markdownConvertor: MarkdownConvertorPipe) {
    this.compHeight = window.innerHeight - 172;
    this.loadComplete = false;

    this.modals = {
      'commitToGit': { title: 'Commit to GitHub' },
      'save': { title: 'Save Markdown' }
    };

    // get saved markdown
    this.activatedRoute.paramMap.subscribe((params: any) => {
      this.markdownId = params.get('markdownId');
      if (this.markdownId) {
        this.markdownService.api.findMarkdownById(this.markdownId)
          .subscribe((markdown) => {
            this.markdownServerObject = markdown;
            if (this.markdownServerObject.content) {
              // check if page reloaded as a result of git login
              if (localStorage.getItem('openModalOnLoad') !== 'commitToGit') {
                this.markdownHtml = this.markdownServerObject.content;
              }
            }
          }, (err) => {
            console.error('Error getting markdown object', err);
            this.errorHandlerService.handleError('Error getting markdown info', err);
          });
      }
    });

  }

  ngOnInit() {
    this.activeTab = 'preview';
    const cachedMarkdown = localStorage.getItem('lastEditedMarkdownHtml');
    if (cachedMarkdown && !this.markdownHtml) {
      this.markdownHtml = cachedMarkdown;
    }

  }

  onEditorLoad() {
    this.loadComplete = true;

    // open modals on load if required
    this.openModal(localStorage.getItem('openModalOnLoad'));
    localStorage.removeItem('openModalOnLoad');
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

  /** Show commit-to-git modal */
  showCommitToGitModal() {
    this.openModal('commitToGit');
  }

  /** Show save markdown modal */
  showSaveModal() {
    if (!this.markdownServerObject) {
      this.markdownServerObject = {
        _id: null,
        author: null,
        title: null,
        content: this.markdownHtml,
        description: null,
        fileName: null
      };
    }

    this.openModal('save');
  }

  /** Open modal corresponding to the specified key */
  openModal(key: string) {
    if (key) {
      this.openModalKey = key;
      $(this.editorModal.nativeElement).modal('show');
    }
  }

  /** Close open modal */
  closeModal(data) {
    if (this.openModalKey === 'save') {
      this.markdownServerObject = data;
    }

    this.openModalKey = null;
    $(this.editorModal.nativeElement).modal('hide');
  }

}
