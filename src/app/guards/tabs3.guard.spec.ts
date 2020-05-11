import { TestBed, async, inject } from '@angular/core/testing';

import { Tabs3Guard } from './tabs3.guard';

describe('Tabs3Guard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Tabs3Guard]
    });
  });

  it('should ...', inject([Tabs3Guard], (guard: Tabs3Guard) => {
    expect(guard).toBeTruthy();
  }));
});
