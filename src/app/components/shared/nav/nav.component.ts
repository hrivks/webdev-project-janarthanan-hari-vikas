import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service.client';
import { User } from '../../../model/model';
import { ErrorHandlerService } from '../../../services/error-handler.service.client';


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
    private errorHanderService: ErrorHandlerService) {
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

  logout() {
    this.authService.logout();
  }

}
