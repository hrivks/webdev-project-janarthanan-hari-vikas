import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service.client';
import { User } from '../../../model/model';


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

  constructor(private authService: AuthService) {
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
    this.authService.login(this.username, this.password);
  }

  logout() {
    this.authService.logout();
  }

}
