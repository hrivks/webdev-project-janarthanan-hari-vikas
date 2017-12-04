import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../../services/auth.service.client';
import { InteractionsService } from '../../../../services/interactions.service.client';
import { AppConstants } from '../../../../app.constant';
import { Markdown } from '../../../../model/model';
import { MarkdownService } from '../../../../services/markdown.service.client';
import { ErrorHandlerService } from '../../../../services/error-handler.service.client';


@Component({
  selector: 'app-save-markdown',
  templateUrl: './save-markdown.component.html',
  styleUrls: ['./save-markdown.component.css']
})
export class SaveMarkdownComponent implements OnInit {

  // properties
  @Input() markdown: Markdown;
  @Output() onComplete: EventEmitter<Markdown> = new EventEmitter<Markdown>();

  // markdown properties
  private title: string;
  private fileName: string;
  private description: string;
  private authorId: string;
  @ViewChild('saveForm') saveForm: NgForm;
  private saveInProgres: boolean;

  constructor(private authService: AuthService,
    private markdownService: MarkdownService,
    private errorHanderService: ErrorHandlerService) {
    if (!this.markdown) {
      this.markdown = new Markdown();
    }
  }

  ngOnInit() {
    const loggedInUser = this.authService.getLoggedInUser();
    if (loggedInUser) {
      this.authorId = loggedInUser._id;
    }
    this.fileName = this.markdown.fileName || 'README.md';
    this.title = this.markdown.title || 'Markdown - ' + (new Date()).toUTCString() + '.md';
    this.description = this.markdown.description;
  }

  /** Save markdown */
  saveMarkdown() {
    if (this.saveForm.invalid) {
      // touch controls to highlight validation
      this.saveForm.controls.title.markAsTouched({ onlySelf: true });
      this.saveForm.controls.fileName.markAsTouched({ onlySelf: true });
      this.saveForm.controls.fileName.markAsTouched({ onlySelf: true });
      this.saveForm.controls.commitMessage.markAsTouched({ onlySelf: true });
      return;
    }

    if (this.saveInProgres) {
      return;
    }

    this.saveInProgres = true;

    if (this.markdown._id) {
      // edit existing markdown
    } else {
      // create new markdown

      this.markdown.title = this.title;
      this.markdown.author = this.authorId;
      this.markdown.description = this.description;
      this.markdown.fileName = this.fileName;

      this.markdownService.createMarkdown(this.markdown)
        .subscribe((createdMarkdown) => {
          this.markdown.title = createdMarkdown.title;
          this.markdown.author = createdMarkdown.author;
          this.markdown.content = createdMarkdown.content;
          this.markdown.fileName = createdMarkdown.fileName;
          this.markdown.description = createdMarkdown.description;

          this.saveInProgres = false;
          this.onComplete.emit(createdMarkdown);
        }, (err) => {
          this.errorHanderService.handleError('Error saving markdown', err);
        });
    }

  }

}
