import { TestBed } from '@angular/core/testing';

import { CadastroclienteDadosService } from './cadastrocliente-dados.service';

describe('CadastroclienteDadosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CadastroclienteDadosService = TestBed.get(CadastroclienteDadosService);
    expect(service).toBeTruthy();
  });
});
