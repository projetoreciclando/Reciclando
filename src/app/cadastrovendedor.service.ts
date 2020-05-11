import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Cadastrovendedor } from './cadastrovendedor';


@Injectable({
  providedIn: 'root'
})
export class CadastrovendedorService {

  constructor(private db: AngularFireDatabase) { }

  insert(cadastrovendedor: Cadastrovendedor){
    this.db.list('cadastrovendedor').push(cadastrovendedor)
    .then((result: any) =>{
      console.log(result.key);
    });
  }
}
