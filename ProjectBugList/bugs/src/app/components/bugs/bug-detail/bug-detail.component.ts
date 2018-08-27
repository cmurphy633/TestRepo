import {Component, Input, EventEmitter, Output, OnInit} from '@angular/core';
import {Bug} from '../../../model/bug';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bug-detail',
  templateUrl: './bug-detail.component.html',
  styleUrls: ['./bug-detail.component.css']
})
export class BugDetailComponent implements OnInit {
  pageTitle = 'Bug Detail';
  bug: Bug;

  // @Input() bug: Bug;
  @Output()
  bugDeselected = new EventEmitter();
  @Output()
  bugDeleted = new EventEmitter<Bug>();
  @Output()
  bugUpdate = new EventEmitter<Bug>();

  constructor(private route: ActivatedRoute,
              private router: Router) {
  }

  onBack(): void {
    this.router.navigate(['/bugs']);
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.bug = new Bug(1, 'test', 'test', new Date(2018, 7, 23), 'test', 'test', 'L',
      'Defect', 'Open', 'S2', 'test', 'test', 'test', 'test',
      new Date(2018, 7, 23));
  }

  removeDetailForBug() {
    this.bugDeselected.emit();
  }

  deleteBug(bug: Bug) {
    this.bugDeleted.emit(bug);
  }

  updateBug(bug: Bug) {
    this.bugUpdate.emit(bug);
  }

}
