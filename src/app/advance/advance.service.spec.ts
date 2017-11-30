import { TestBed, inject } from '@angular/core/testing';

import { AdvanceService } from './advance.service';

describe('AdvanceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdvanceService]
    });
  });

  it('should be created', inject([AdvanceService], (service: AdvanceService) => {
    expect(service).toBeTruthy();
  }));
});
