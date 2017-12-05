import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../model/model';
import { UserService } from '../../../services/user.service.client';
import { ErrorHandlerService } from '../../../services/error-handler.service.client';

@Component({
  selector: 'app-user-list-select',
  templateUrl: './user-list-select.component.html',
  styleUrls: ['./user-list-select.component.css']
})
export class UserListSelectComponent implements OnInit {

  @Input() ignoreById: string[];
  @Input() selectedUsers: User[];
  @Output() selectedUsersChange = new EventEmitter<User[]>();
  private users: User[];


  constructor(private userService: UserService,
    private errorHandlerService: ErrorHandlerService) {
  }

  ngOnInit() {

    // get list of users
    this.userService.getAllUsers()
      .subscribe((users) => {
        if (this.ignoreById && this.ignoreById.length) {
          this.users = users.filter((u) => this.ignoreById.indexOf(u._id) === -1);
        } else {
          this.users = users;
        }

        if (!this.selectedUsers) {
          this.selectedUsers = [];
        } else {
          this.selectedUsers = this.users.filter((i) => {
            return this.selectedUsers.find((j) => j._id === i._id);
          });
        }
      }, (err) => {
        this.errorHandlerService.handleError('Error getting list of users', err);
      });

  }

  /**
   * toggle select / unselect
   * @param user selected user
   */
  selectUser(user) {
    if (this.selectedUsers.indexOf(user) === -1) {
      this.selectedUsers.push(user);
    } else {
      this.selectedUsers.splice(this.selectedUsers.indexOf(user), 1);
    }

    this.selectedUsersChange.emit(this.selectedUsers);
  }

}
