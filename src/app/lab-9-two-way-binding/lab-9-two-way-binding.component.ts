import {Component, OnInit, Inject} from '@angular/core';

@Component({
  selector: 'app-lab-9-two-way-binding',
  templateUrl: './lab-9-two-way-binding.component.html',
  styleUrls: ['./lab-9-two-way-binding.component.css']
})
export class Lab9TwoWayBindingComponent implements OnInit {
  constructor(@Inject('sms') private sms) {
  }

  ngOnInit() {
  }
}
