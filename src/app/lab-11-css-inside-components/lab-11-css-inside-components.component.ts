import {Component, OnInit, Inject} from '@angular/core';

@Component({
  selector: 'app-lab-11-css-inside-components',
  templateUrl: './lab-11-css-inside-components.component.html',
  styleUrls: ['./lab-11-css-inside-components.component.css']
})
export class Lab11CssInsideComponentsComponent implements OnInit {
  constructor(@Inject('quest') private quest) {
  }

  ngOnInit() {
  }

  onUpdate(id, text){
    this.quest.update(id, text);
  }
}
