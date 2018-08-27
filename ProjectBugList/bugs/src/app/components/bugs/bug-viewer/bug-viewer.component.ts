import { Component, OnInit } from '@angular/core';
import {Bug} from '../../../model/bug';
import {BugService} from '../../../services/bug_service';

@Component({
  selector: 'app-bug-viewer',
  templateUrl: './bug-viewer.component.html',
  styleUrls: ['./bug-viewer.component.css']
})
export class BugViewerComponent implements OnInit {
  name = 'BugViewerComponent';
  bugs: Bug[];
  selectedBug: Bug;
  filteredBugs: Bug[];
  filterText = '';
  createNew = false;


  ngOnInit(): void {
  }

  constructor(private bugService: BugService) {
    this.bugService.getAll()
      .subscribe(bugs => {
        this.bugs = bugs;
        console.log( 'so many bugs ' + bugs.length);
        this.refreshFilteredBugs();
      });
  }

  showDetailForBug(bug: Bug) {
    this.selectedBug = bug;
  }

  showCreateForm() {
    this.createNew = true;
  }

  hideCreateForm() {
    this.createNew = false;
  }

  removeDetailForBug() {
    this.selectedBug = null;
  }

  deleteBug(bug: Bug) {
    this.bugs = this.bugs.filter(item => item.bugReference !== bug.bugReference);
    this.removeDetailForBug();
    this.refreshFilteredBugs();
  }

  updateBug(bug: Bug) {
    const index = this.bugs.findIndex((obj => obj.id === bug.id));
    this.bugs[index] = bug;
    this.refreshFilteredBugs();
  }

  filterBugs() {
    this.refreshFilteredBugs();
  }

  addNewBug(bug: Bug) {
    console.log('got back to the viewer with bug :' + bug.bugReference);
    this.bugs.push(bug);
    this.refreshFilteredBugs();

  }

  private refreshFilteredBugs() {
    console.log('refresh hit');
    this.filteredBugs = this.bugs.filter(x => x.id.toString().indexOf(this.filterText) >= 0
      || x.status.toLowerCase().indexOf(this.filterText) >= 0
      || x.severity.toLowerCase().indexOf(this.filterText) >= 0
      || x.owner.toLowerCase().indexOf(this.filterText) >= 0
      || x.requirementsReference.toLowerCase().indexOf(this.filterText) >= 0
      || x.developer.toLowerCase().indexOf(this.filterText) >= 0
      || x.summary.toLowerCase().indexOf(this.filterText) >= 0
      || x.type.toLowerCase().indexOf(this.filterText) >= 0);
  }



}
