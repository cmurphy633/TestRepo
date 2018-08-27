import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Bug} from '../../../model/bug';

@Component({
  selector: 'app-bug-form',
  templateUrl: './bug-form.component.html',
  styleUrls: ['./bug-form.component.css']
})

export class BugFormComponent implements OnInit {

  @Input() bug: Bug;
 // @Output() bugDeselected = new EventEmitter();
  submitted = false;
  newBug: Bug = new Bug(0, '', '', new Date(), '', '', '', '',
    'Open', '', '', '', '');

  @Output()
  bugCreated = new EventEmitter<Bug>();
  @Output()
  closeCreateForm = new EventEmitter();

  typeList = ['Defect', 'Suggestion', 'Enhancement', 'Question'];
  severities = ['S1', 'S2', 'S3', 'S4'];
  priorities = ['L', 'M', 'H', 'VH'];

  create(bug: Bug) {

      alert('Created!')
      this.bugCreated.emit(bug);

     // this.newBug = new Bug(0, '', '', new Date(), '', '', '', '',
    //      //  '', 'Open', '', '');
  }

  onSubmit() {
    console.log('Submitting New Bug Form');
    this.submitted = true;
    this.create(this.newBug);
  }

  hideCreateForm() {
    this.closeCreateForm.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
