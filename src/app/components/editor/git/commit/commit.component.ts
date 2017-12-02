import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service.client';
import { InteractionsService } from '../../../../services/interactions.service.client';
import { AppConstants } from '../../../../app.constant';
import { GitHubService } from '../../../../services/github.service.client';
import { ErrorHandlerService } from '../../../../services/error-handler.service.client';

@Component({
  selector: 'app-commit-to-git',
  templateUrl: './commit.component.html',
  styleUrls: ['./commit.component.css']
})
export class CommitComponent implements OnInit {

  private gitToken: string;
  private repos: string[];

  constructor(private authService: AuthService,
    private interactionService: InteractionsService,
    private githubService: GitHubService,
    private errorHandlerService: ErrorHandlerService) {
  }

  ngOnInit() {
    const loggedInUser = this.authService.getLoggedInUser();
    if (loggedInUser && loggedInUser.github.token) {
      this.gitToken = loggedInUser.github.token;
      this.getUserRepos();
    }
  }

  /** Get list of user repositories */
  getUserRepos() {
    this.githubService.getRepos()
      .subscribe((repos) => {
        console.log(repos);
        this.repos = repos;
      }, (err) => {
        this.errorHandlerService.handleError('Error getting GitHub Repositories', err);
      });
  }

}
