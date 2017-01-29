import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-lab-10-components-with-output-target',
  templateUrl: './lab-10-components-with-output-target.component.html',
  styleUrls: ['./lab-10-components-with-output-target.component.css']
})
export class Lab10ComponentsWithOutputTargetComponent implements OnInit {
  @Input() message;

  @Output() update = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
