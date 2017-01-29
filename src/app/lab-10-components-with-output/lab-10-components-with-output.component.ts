import {Component, OnInit, Inject} from '@angular/core';

@Component({
  selector: 'app-lab-10-components-with-output',
  templateUrl: './lab-10-components-with-output.component.html',
  styleUrls: ['./lab-10-components-with-output.component.css']
})
export class Lab10ComponentsWithOutputComponent implements OnInit {
  constructor(@Inject('quest') private quest) {
  }

  ngOnInit() {
  }

  onUpdate(id, text){
    this.quest.update(id, text);
  }

}
