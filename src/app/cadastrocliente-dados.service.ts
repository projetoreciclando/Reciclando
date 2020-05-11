import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cadastrocliente } from './cadastrocliente';

@Injectable({
  providedIn: 'root'
})
export class CadastroclienteDadosService {
  private cadastroclienteSource = new BehaviorSubject({ cadastrocliente: null, key: ''});
  currentCadastrocliente = this.cadastroclienteSource.asObservable();
  constructor() { }
}
