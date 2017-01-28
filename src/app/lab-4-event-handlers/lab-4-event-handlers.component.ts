import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab-4-event-handlers',
  templateUrl: './lab-4-event-handlers.component.html',
  styleUrls: ['./lab-4-event-handlers.component.css']
})
export class Lab4EventHandlersComponent implements OnInit {
  constructor() {
  }

  onClick(event, value) {
    console.log(value);
    console.log(event);
  }

  ngOnInit() {
  }
}
