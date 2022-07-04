import { TestBed } from '@angular/core/testing';

import { SilverGuard } from './silver.guard';

describe('SilverGuard', () => {
  let guard: SilverGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SilverGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
