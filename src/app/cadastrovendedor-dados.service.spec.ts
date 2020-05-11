import { TestBed } from '@angular/core/testing';

import { CadastrovendedorDadosService } from './cadastrovendedor-dados.service';

describe('CadastrovendedorDadosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CadastrovendedorDadosService = TestBed.get(CadastrovendedorDadosService);
    expect(service).toBeTruthy();
  });
});
