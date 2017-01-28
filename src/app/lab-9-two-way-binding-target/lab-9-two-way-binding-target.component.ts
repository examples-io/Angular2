import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-lab-9-two-way-binding-target',
  templateUrl: './lab-9-two-way-binding-target.component.html',
  styleUrls: ['./lab-9-two-way-binding-target.component.css']
})
export class Lab9TwoWayBindingTargetComponent implements OnInit {
  @Input() message;

  onClick(event, value) {
    console.log(event);
    console.log(value);
  }

  constructor() {
  }

  ngOnInit() {
  }
}
