import { TestBed, async, inject } from '@angular/core/testing';

import { Tabs2Guard } from './tabs2.guard';

describe('Tabs2Guard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Tabs2Guard]
    });
  });

  it('should ...', inject([Tabs2Guard], (guard: Tabs2Guard) => {
    expect(guard).toBeTruthy();
  }));
});
