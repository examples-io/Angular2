import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-lab-12-apply-css-conditionally-target',
  templateUrl: './lab-12-apply-css-conditionally-target.component.html',
  styleUrls: ['./lab-12-apply-css-conditionally-target.component.css']
})
export class Lab12ApplyCssConditionallyTargetComponent implements OnInit {
  isMousedown;

  @Input() message;

  @Output() update = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
}
