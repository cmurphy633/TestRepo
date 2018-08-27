import { Component, OnInit } from '@angular/core';
import {User} from '../../../model/user';
import {UserService} from '../../../services/user_service';

@Component({
  selector: 'app-user-viewer',
  templateUrl: './user-viewer.component.html',
  styleUrls: ['./user-viewer.component.css']
})
export class UserViewerComponent implements OnInit {
  name = 'UserViewerComponent';
  users: User[];
  selectedUser: User;
  filteredUsers: User[];
  filterText = '';
  // createNew = false;


  ngOnInit(): void {
  }

  constructor(private userService: UserService) {
    this.userService.getAll()
      .subscribe(users => {
        this.users = users;
        console.log( 'so many users ' + users.length);
        this.refreshFilteredUsers();
      });
  }

  // showDetailForUser(user: User) {
  //   this.selectedUser = user;
  // }

  // showCreateForm() {
  //   this.createNew = true;
  // }
  //
  // hideCreateForm() {
  //   this.createNew = false;
  // }
  //
  // removeDetailForBug() {
  //   this.selectedBug = null;
  // }

  // deleteBug(bug: Bug) {
  //   this.bugs = this.bugs.filter(item => item.bugReference !== bug.bugReference);
  //   this.removeDetailForBug();
  //   this.refreshFilteredBugs();
  // }

  // updateBug(bug: Bug) {
  //   const index = this.bugs.findIndex((obj => obj.id === bug.id));
  //   this.bugs[index] = bug;
  //   this.refreshFilteredUsers();
  // }

  filterUsers() {
    this.refreshFilteredUsers();
  }

  private refreshFilteredUsers() {
    console.log('refresh hit');
    this.filteredUsers = this.users.filter(x => x.user_id.toString().indexOf(this.filterText) >= 0
      || x.forename.toLowerCase().indexOf(this.filterText) >= 0
      || x.surname.toLowerCase().indexOf(this.filterText) >= 0
      || x.user_email.toLowerCase().indexOf(this.filterText) >= 0);
  }

}
