import {Component, OnInit, Inject} from '@angular/core';

@Component({
  selector: 'app-lab-12-apply-css-conditionally',
  templateUrl: './lab-12-apply-css-conditionally.component.html',
  styleUrls: ['./lab-12-apply-css-conditionally.component.css']
})
export class Lab12ApplyCssConditionallyComponent implements OnInit {
  constructor(@Inject('quest') private quest) {
  }

  ngOnInit() {
  }

  onUpdate(id, text){
    this.quest.update(id, text);
  }
}
