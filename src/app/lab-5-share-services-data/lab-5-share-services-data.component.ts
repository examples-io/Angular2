import { Component, OnInit } from '@angular/core';
import {MailService} from "../services/mail.service";

@Component({
  selector: 'app-lab-5-share-services-data',
  templateUrl: './lab-5-share-services-data.component.html',
  styleUrls: ['./lab-5-share-services-data.component.css']
})
export class Lab5ShareServicesDataComponent implements OnInit {
  constructor(private mail: MailService) {
  }

  ngOnInit() {
  }
}