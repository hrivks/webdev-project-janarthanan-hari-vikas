import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { User } from '../model/model';
import { AppConstants } from '../app.constant';

@Injectable()
export class UserService {

    api = {
        'login': this.login,
        'logout': this.logout,
        'loggedIn': this.loggedIn,
        'register': this.register,
        'findUserById': this.findUserById,
        'findUserByUsername': this.findUserByUsername,
        'findUserByCredentials': this.findUserByCredentials,
        'updateUser': this.updateUser,
        'deleteUser': this.deleteUser
    };

    endpoint = {
        'login': AppConstants.ENDPOINT.baseUrl + '/user/login',
        'logout': AppConstants.ENDPOINT.baseUrl + '/user/logout',
        'loggedIn': AppConstants.ENDPOINT.baseUrl + '/user/loggedIn',
        'register': AppConstants.ENDPOINT.baseUrl + '/user/register',
        'findUserByUsername': AppConstants.ENDPOINT.baseUrl + '/user?username={username}',
        'findUserByCredentials': AppConstants.ENDPOINT.baseUrl + '/user?username={username}&password={password}',
        'findUserById': AppConstants.ENDPOINT.baseUrl + '/user/{userId}',
        'updateUser': AppConstants.ENDPOINT.baseUrl + '/user/{userId}',
        'deleteUser': AppConstants.ENDPOINT.baseUrl + '/user/{userId}'
    };

    constructor(private http: HttpClient) { }

    // #region: Authentication

    /**
     * Login user
     * @param username username
     * @param password password
     */
    login(username: string, password: string) {
        const url = this.endpoint.login;
        const creds = {
            username: username,
            password: password
        };
        return this.http.post<User>(url, creds, { withCredentials: true });
    }

    /** Logout user */
    logout() {
        const url = this.endpoint.logout;
        return this.http.post<User>(url, '', { withCredentials: true });
    }

    /** Check if current user is logged in */
    loggedIn() {
        const url = this.endpoint.loggedIn;
        return this.http.post<User>(url, '', { withCredentials: true });
    }

    //#endregion: Authentication


    /**
       * Register new user
       * @param username username
       * @param password password
       */
    register(username: string, password: string) {
        const url = this.endpoint.register;
        const creds = {
            username: username,
            password: password
        };

        return this.http.post<User>(url, creds, { withCredentials: true });
    }

    /**
     * Find user by user id
     * @param userId id of the user
     * @returns Observable that resolves to user with the specifed id; null if id doesn't exist
     */
    findUserById(userId: string): Observable<User> {
        const url = this.endpoint.findUserById.replace('{userId}', userId);
        return this.http.get<User>(url);
    }

    /**
     * Find user by user name
     * @param username username of the user
     * @returns Observable that resolves to user with the specifed username; null if id doesn't exist
     */
    findUserByUsername(username: string): Observable<User> {
        const url = this.endpoint.findUserByUsername.replace('{username}', username);
        return this.http.get<User>(url);
    }

    /**
     * Find user by credentials
     * @param username username of the user
     * @param password password of the user
     * @returns Observable that resolves to user with the specifed username; null if id doesn't exist
     */
    findUserByCredentials(username: string, password: string): Observable<User> {
        const url = this.endpoint.findUserByCredentials
            .replace('{username}', username)
            .replace('{password}', password);
        return this.http.get<User>(url);
    }

    /**
     * Update user by user id
     * @param {string} userId id of the user
     * @param user updated user object
     * @returns Observable that resolves to updated user object
     */
    updateUser(userId: string, user: User): Observable<User> {
        const url = this.endpoint.updateUser.replace('{userId}', userId);
        return this.http.put<User>(url, user);
    }

    /**
     * Delete user by user id
     * @param {string} userId id of the user
     * @returns Observable that resolves to deleted user object
     */
    deleteUser(userId: string): Observable<User> {
        const url = this.endpoint.deleteUser.replace('{userId}', userId);
        return this.http.delete<User>(url);
    }
}
