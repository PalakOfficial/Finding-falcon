import { TestBed } from '@angular/core/testing';

import { FindFalconService } from './find-falcon.service';

describe('FindFalconService', () => {
  let service: FindFalconService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindFalconService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
