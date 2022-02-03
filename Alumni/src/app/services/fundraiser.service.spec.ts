import { TestBed } from '@angular/core/testing';

import { FundraiserService } from './fundraiser.service';

describe('FundraiserService', () => {
  let service: FundraiserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FundraiserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
