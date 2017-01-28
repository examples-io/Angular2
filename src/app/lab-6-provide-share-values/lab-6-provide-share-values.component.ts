import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-lab-6-provide-share-values',
  templateUrl: './lab-6-provide-share-values.component.html',
  styleUrls: ['./lab-6-provide-share-values.component.css']
})
export class Lab6ProvideShareValuesComponent implements OnInit {
  title = `Let's get started!`;

  constructor(@Inject('sms') private sms,
              @Inject('api') private api) {
  }

  ngOnInit() {
  }
}