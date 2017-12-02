import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { User } from '../model/model';
import { UserService } from './user.service.client';
import { ErrorHandlerService } from './error-handler.service.client';
import { CanActivate } from '@angular/router';
import { InteractionsService } from './interactions.service.client';
import { AppConstants } from '../app.constant';

@Injectable()
export class AuthService implements CanActivate {
    // properties
    loggedInUser: User;

    api = {
        'getLoggedInUser': this.getLoggedInUser,
        'setLoggedInUser': this.setLoggedInUser,
        'login': this.login,
        'logout': this.logout
    };

    constructor(private router: Router,
        private userService: UserService,
        private interactionService: InteractionsService,
        private errorHandlerService: ErrorHandlerService) { }

    canActivate() {
        return this.checkLoggedIn();
    }

    /**
     * Check if user is logged in
     * @returns logged in user object; null, if user is not logged in
     */
    getLoggedInUser(): User {
        this.loggedInUser = this.loggedInUser || JSON.parse(localStorage.getItem('loggedInUser'));
        if (this.loggedInUser) {
            return Object.assign({}, this.loggedInUser);
        } else {
            return null;
        }
    }


    /** Set user as logged in user */
    setLoggedInUser(user: User): void {
        this.loggedInUser = user;
        localStorage.setItem('loggedInUser', JSON.stringify(this.loggedInUser));
        this.interactionService.invoke(AppConstants.EVENTS.loginChange, Object.assign({}, this.loggedInUser));
    }

    /** Remove logged in user */
    removeLoggedInUser(): void {
        this.loggedInUser = null;
        localStorage.removeItem('loggedInUser');
        this.interactionService.invoke(AppConstants.EVENTS.loginChange, null);
    }

    /**
     * Login user
     * @param username username
     * @param password password
     * @returns logged in user; null if login fails
     */
    login(username: string, password: string): Observable<User> {
        const obs = new Observable<User>((observer) => {
            this.userService.login(username, password)
                .subscribe((loggedInUser) => {
                    console.log(loggedInUser);
                    this.setLoggedInUser(loggedInUser);
                    observer.next(Object.assign({}, loggedInUser));
                    observer.complete();
                }, (err) => {
                    this.removeLoggedInUser();
                    observer.error(err);
                });
        });

        return obs;
    }

    /**
     *  Check if user is logged in
     * @returns subscription that resolves to true if the user is logged in, false otherwise
     */
    checkLoggedIn(disableRedirect?: boolean): Observable<boolean> {
        const obs = new Observable<boolean>((observer) => {
            this.userService.loggedIn()
                .subscribe((res) => {
                    if (res) {
                        console.log(res);
                        this.setLoggedInUser(res);
                        observer.next(true);
                        observer.complete();
                    } else {
                        this.removeLoggedInUser();
                        if (!disableRedirect) {
                            this.router.navigate(['/login']);
                        }
                        observer.next(false);
                        observer.complete();
                    }
                }, (err) => {
                    console.log(err);
                    this.removeLoggedInUser();
                    observer.next(false);
                    observer.complete();
                });
        });

        return obs;
    }

    /**
     * Logout user
     */
    logout() {
        this.userService.logout()
            .subscribe((res) => {
                this.removeLoggedInUser();
                this.router.navigate(['/']);
            }, (err) => {
                this.errorHandlerService.handleError('Oops! Strange! Can\'t log you out!', err);
            });
    }

}
