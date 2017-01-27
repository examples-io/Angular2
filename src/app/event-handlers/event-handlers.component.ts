import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-handlers',
  templateUrl: './event-handlers.component.html',
  styleUrls: ['./event-handlers.component.css']
})
export class EventHandlersComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

  onClick(event, value) {
    console.log(value);
    console.log(event);
  }
}
