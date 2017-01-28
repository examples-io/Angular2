import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-lab-8-pass-value-into-component-target',
  templateUrl: './lab-8-pass-value-into-component-target.component.html',
  styleUrls: ['./lab-8-pass-value-into-component-target.component.css']
})
export class Lab8PassValueIntoComponentTargetComponent implements OnInit {
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