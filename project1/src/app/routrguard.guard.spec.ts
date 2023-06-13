import { TestBed } from '@angular/core/testing';

import { RoutrguardGuard } from './routrguard.guard';

describe('RoutrguardGuard', () => {
  let guard: RoutrguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RoutrguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
