import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Cadastrocliente } from './cadastrocliente';


@Injectable({
  providedIn: 'root'
})

export class CadastroclienteService {
  constructor(private db: AngularFireDatabase) {}

  insert(cadastrocliente: Cadastrocliente){
    this.db.list('cadastrocliente').push(cadastrocliente)
    .then((result:any) =>{
      console.log(result.key);
    });
  }
}