import { TestBed } from '@angular/core/testing';

import { FetchReminderServiceService } from './fetch-reminder-service.service';

describe('FetchReminderServiceService', () => {
  let service: FetchReminderServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchReminderServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
