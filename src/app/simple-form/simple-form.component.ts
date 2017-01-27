import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-simple-form',
    template: `
    <h3>Lab 2: Create a Simple Angular 2 Component</h3>
    <p>
      Simple Form Component Works!
    </p>
  `,
    styles: []
})
export class SimpleFormComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }
}
