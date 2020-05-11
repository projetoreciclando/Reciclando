import { TestBed } from '@angular/core/testing';

import { CadastrovendedorService } from './cadastrovendedor.service';

describe('CadastrovendedorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CadastrovendedorService = TestBed.get(CadastrovendedorService);
    expect(service).toBeTruthy();
  });
});
