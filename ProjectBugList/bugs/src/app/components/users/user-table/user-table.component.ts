import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../../model/user';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  @Output()
  userSelected = new EventEmitter<User>();

  constructor() {
  }

  @Input() users: User[];

  ngOnInit() {
  }

}
