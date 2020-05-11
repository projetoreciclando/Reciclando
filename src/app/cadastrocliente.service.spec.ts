import { TestBed } from '@angular/core/testing';

import { CadastroclienteService } from './cadastrocliente.service';

describe('CadastroclienteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CadastroclienteService = TestBed.get(CadastroclienteService);
    expect(service).toBeTruthy();
  });
});
