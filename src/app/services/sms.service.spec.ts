/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SmsService } from './sms.service';

describe('SmsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SmsService]
    });
  });

  it('should ...', inject([SmsService], (service: SmsService) => {
    expect(service).toBeTruthy();
  }));
});
