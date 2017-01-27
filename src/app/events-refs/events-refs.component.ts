import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-refs',
  templateUrl: './events-refs.component.html',
  styleUrls: ['./events-refs.component.css']
})
export class EventsRefsComponent implements OnInit {

  constructor() { }

  onClick(value){
    console.log(value);
  }

  ngOnInit() {
  }

}
