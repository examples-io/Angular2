import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'app-lab-11-css-inside-components-target',
  templateUrl: './lab-11-css-inside-components-target.component.html',
  styleUrls: ['./lab-11-css-inside-components-target.component.css']
})
export class Lab11CssInsideComponentsTargetComponent implements OnInit {
  @Input() message;

  @Output() update = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
