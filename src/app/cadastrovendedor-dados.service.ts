import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cadastrovendedor } from './cadastrovendedor';

@Injectable({
  providedIn: 'root'
})
export class CadastrovendedorDadosService {
  private cadastrovendedorSource = new BehaviorSubject({ cadastrovendedor: null, key: ''});
  currentCadastrovendedor = this.cadastrovendedorSource.asObservable();
  constructor() { }
}
