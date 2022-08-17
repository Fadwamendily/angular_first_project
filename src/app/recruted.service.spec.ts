import { TestBed } from '@angular/core/testing';

import { RecrutedService } from './recruted.service';

describe('RecrutedService', () => {
  let service: RecrutedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecrutedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
