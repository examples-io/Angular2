import {Component, OnInit, Inject} from '@angular/core';

@Component({
  selector: 'app-lab-7-loop-ngfor',
  templateUrl: './lab-7-loop-ngfor.component.html',
  styleUrls: ['./lab-7-loop-ngfor.component.css']
})
export class Lab7LoopNgforComponent implements OnInit {
  constructor(@Inject('sms') private sms) {
  }

  ngOnInit() {
  }
}