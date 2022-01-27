import { TestBed } from '@angular/core/testing';

import { FetchapiService } from './fetchapi.service';

describe('FetchapiService', () => {
  let service: FetchapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
