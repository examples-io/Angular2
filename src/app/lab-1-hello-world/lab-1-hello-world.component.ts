import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab-1-hello-world',
  templateUrl: './lab-1-hello-world.component.html',
  styleUrls: ['./lab-1-hello-world.component.css']
})
export class Lab1HelloWorldComponent implements OnInit {
  title = 'Hello World!';

  constructor() {
  }

  ngOnInit() {
  }
}
