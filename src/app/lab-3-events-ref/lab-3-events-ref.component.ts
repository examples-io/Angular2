import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab-3-events-ref',
  templateUrl: './lab-3-events-ref.component.html',
  styleUrls: ['./lab-3-events-ref.component.css']
})
export class Lab3EventsRefComponent implements OnInit {
  constructor() {
  }

  onClick(value) {
    console.log(value);
  }

  ngOnInit() {
  }
}