import {Injectable} from '@angular/core';

@Injectable()
export class SmsService {
  message = `You've got sms!`;

  messages = [
    `You're now friends with John.`,
    `John liked your tweet.`,
    `You'll never believe what John said.`
  ]

  constructor() {
  }
}