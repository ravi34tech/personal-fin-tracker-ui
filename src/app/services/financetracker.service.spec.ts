import { TestBed } from '@angular/core/testing';

import { FinancetrackerService } from './financetracker.service';

describe('FinancetrackerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FinancetrackerService = TestBed.get(FinancetrackerService);
    expect(service).toBeTruthy();
  });
});
