import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Bug} from 'app/model/bug';

@Component({
  selector: 'app-bug-table',
  templateUrl: './bug-table.component.html',
  styleUrls: ['./bug-table.component.css']
})
export class BugTableComponent implements OnInit {

  @Output()
  bugSelected = new EventEmitter<Bug>();

  constructor() { }

  bug: Bug;
  @Input() bugs: Bug[];


  ngOnInit() {
  }

  showDetailForBug(bug: Bug) {
    this.bugSelected.emit(bug);
  }
}
