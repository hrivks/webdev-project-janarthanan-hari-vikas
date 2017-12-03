import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../../services/auth.service.client';
import { InteractionsService } from '../../../../services/interactions.service.client';
import { AppConstants } from '../../../../app.constant';
import { GitHubService } from '../../../../services/github.service.client';
import { ErrorHandlerService } from '../../../../services/error-handler.service.client';
import { window } from 'rxjs/operators/window';

@Component({
  selector: 'app-commit-to-git',
  templateUrl: './commit.component.html',
  styleUrls: ['./commit.component.css']
})
export class CommitComponent implements OnInit {

  // properties
  @Input() fileContent: string;
  @Output() onComplete: EventEmitter<boolean> = new EventEmitter<boolean>();
  private gitToken: string;
  private repos: string[];

  // form fields
  private repo: string;
  private branch: string;
  private fileName: string;
  private commitMessage: string;

  constructor(private authService: AuthService,
    private interactionService: InteractionsService,
    private githubService: GitHubService,
    private errorHandlerService: ErrorHandlerService) {
  }

  ngOnInit() {
    const loggedInUser = this.authService.getLoggedInUser();
    console.log(loggedInUser);
    if (loggedInUser && loggedInUser.github.token) {
      this.gitToken = loggedInUser.github.token;
      this.getUserRepos();
    }
  }

  /** Get list of user repositories */
  getUserRepos() {
    this.githubService.getRepos()
      .subscribe((repos) => {
        this.repos = repos;
      }, (err) => {
        this.errorHandlerService.handleError('Error getting GitHub Repositories', err);
      });
  }

  /** Commit to Git */
  commit() {
    this.githubService.commit(this.repo, this.branch, this.fileContent, this.fileName, this.commitMessage)
      .subscribe((success) => {
        this.onComplete.emit(success);
      }, (err) => {
        this.errorHandlerService.handleError('Error committing to Git', err);
      });
  }

  loginToGit() {
    localStorage.setItem('openModalOnLoad', 'commitToGit');
    location.href = 'http://localhost:3100/api/auth/github';
  }

}
