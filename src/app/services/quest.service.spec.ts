/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { QuestService } from './quest.service';

describe('QuestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestService]
    });
  });

  it('should ...', inject([QuestService], (service: QuestService) => {
    expect(service).toBeTruthy();
  }));
});
