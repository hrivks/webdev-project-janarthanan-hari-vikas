import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { User } from '../model/model';
import { AppConstants } from '../app.constant';

@Injectable()
export class UserService {

  api = {
    'createUser': this.createUser,
    'findUserById': this.findUserById,
    'findUserByUsername': this.findUserByUsername,
    'findUserByCredentials': this.findUserByCredentials,
    'updateUser': this.updateUser,
    'deleteUser': this.deleteUser
  };

  endpoint = {
    'createUser': AppConstants.ENDPOINT.baseUrl + '/user',
    'findUserByUsername':  AppConstants.ENDPOINT.baseUrl + '/user?username={username}',
    'findUserByCredentials':  AppConstants.ENDPOINT.baseUrl + '/user?username={username}&password={password}',
    'findUserById':  AppConstants.ENDPOINT.baseUrl + '/user/{userId}',
    'updateUser':  AppConstants.ENDPOINT.baseUrl + '/user/{userId}',
    'deleteUser':  AppConstants.ENDPOINT.baseUrl + '/user/{userId}'
  };

  constructor(private http: HttpClient) { }

  /**
   * Create a new user
   * @param user user object to be added to the user list
   * @returns Observable that resolves to created user object
   */
  createUser(user: User): Observable<User> {
    const url = this.endpoint.createUser;
    return this.http.post<User>(url, user);
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
