import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service.client';
import { User } from '../../../model/model';
import { ErrorHandlerService } from '../../../services/error-handler.service.client';
import { InteractionsService } from '../../../services/interactions.service.client';
import { AppConstants } from '../../../app.constant';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  // properties
  private loggedIn: boolean | User;
  private username: string;
  private password: string;

  constructor(private authService: AuthService,
    private interactionService: InteractionsService,
    private errorHanderService: ErrorHandlerService) {

    // register for login change
    this.interactionService.registerCallback(AppConstants.EVENTS.loginChange, (user) => {
      if (user) {
        this.loggedIn = user;
      } else {
        this.loggedIn = false;
      }
    });

    this.authService.checkLoggedIn(true)
      .subscribe((loggedIn) => {
        if (loggedIn) {
          this.loggedIn = this.authService.getLoggedInUser();
        }
      }, (err) => {
        console.error('Error checking user login status', err);
        this.loggedIn = false;
      });
  }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.username, this.password)
      .subscribe((usr) => {
        this.loggedIn = usr;
      }, (err) => {
        this.errorHanderService.handleError('Login Failed', err);
      });
  }

  loginToGit() {
    this.authService.loginToGit();
  }

  logout() {
    localStorage.clear();
    this.authService.logout();
  }

}
