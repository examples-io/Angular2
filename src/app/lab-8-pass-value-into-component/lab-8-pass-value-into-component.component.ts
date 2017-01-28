import {Component, OnInit, Inject} from '@angular/core';

@Component({
  selector: 'app-lab-8-pass-value-into-component',
  templateUrl: './lab-8-pass-value-into-component.component.html',
  styleUrls: ['./lab-8-pass-value-into-component.component.css']
})
export class Lab8PassValueIntoComponentComponent implements OnInit {
  constructor(@Inject('sms') private sms) {
  }

  ngOnInit() {
  }
}
