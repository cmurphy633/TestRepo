import { TestBed, async, inject } from '@angular/core/testing';

import { BugDetailGuard } from './bug-detail.guard';

describe('BugDetailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BugDetailGuard]
    });
  });

  it('should ...', inject([BugDetailGuard], (guard: BugDetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
