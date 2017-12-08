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

  @Input() ignoreIds: string[];
  @Input() selectedUserIds: string[];
  @Output() selectedUserIdsChange = new EventEmitter<string[]>();
  private searchQuery: string;
  private searchResults: User[];
  private users: User[];

  constructor(private userService: UserService,
    private errorHandlerService: ErrorHandlerService) {
  }

  ngOnInit() {
    this.userService.findUsersByIds(this.selectedUserIds.join(','))
      .subscribe((users) => {
        if (this.ignoreIds && this.ignoreIds.length) {
          this.users = users.filter((i) => this.ignoreIds.indexOf(i._id) === -1);
        } else {
          this.users = users;
        }
      });

  }

  /** Search for user based on username or name */
  searchUsers() {
    if (this.searchQuery) {
      this.userService.searchByName(this.searchQuery)
        .subscribe((results) => {
          this.searchResults = results;
        });
    }
  }

  /**
   * toggle select / unselect
   * @param user selected user
   */
  selectUser(user) {
    if (this.selectedUserIds.indexOf(user._id) === -1) {
      this.selectedUserIds.push(user._id);
      this.users.push(user);

      this.searchResults = this.searchResults.filter((i) => i._id !== user._id);
    }

    this.selectedUserIdsChange.emit(this.selectedUserIds);
  }

  /** Remove user from selected list of users */
  removeUser(user) {
    if (this.selectedUserIds.indexOf(user._id) > -1) {
      this.selectedUserIds.splice(this.selectedUserIds.indexOf(user._id), 1);
      this.users = this.users.filter((i) => i._id !== user._id);
      this.selectedUserIdsChange.emit(this.selectedUserIds);
    }
  }
}
