import { Component, OnInit } from '@angular/core';
import { Cadastrocliente } from '../cadastrocliente';
import { CadastroclienteService } from '../cadastrocliente.service';
import { CadastroclienteDadosService } from '../cadastrocliente-dados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})


export class CadastroPage implements OnInit {
  cadastrocliente: Cadastrocliente;
  key: string= '';

  constructor(private cadastroclienteService: CadastroclienteService, private cadastroclienteDataService: CadastroclienteDadosService, private router: Router) { 

  }

  ngOnInit() {
    this.cadastrocliente = new Cadastrocliente();
    this.cadastroclienteDataService.currentCadastrocliente.subscribe(data =>{
      if (data.cadastrocliente && data.key){
        this.cadastrocliente = new Cadastrocliente();
        this.cadastrocliente.nome = data.cadastrocliente.nome;
        this.cadastrocliente.email = data.cadastrocliente.email;
        this.cadastrocliente.senha = data.cadastrocliente.senha;
        this.cadastrocliente.cpf = data.cadastrocliente.cpf;
        this.cadastrocliente.telefone = data.cadastrocliente.telefone;
        this.cadastrocliente.endereco = data.cadastrocliente.endereco;
        this.cadastrocliente.complemento = data.cadastrocliente.complemento;
        this.cadastrocliente.estado = data.cadastrocliente.estado;
        this.cadastrocliente.cep = data.cadastrocliente.cep;
        this.key = data.key;
      }
    });
  }

 // Não sei oq por aqui// 
  onSubmit(){
    this.cadastroclienteService.insert(this.cadastrocliente);
    this.router.navigate(['/cadastro']);
    this.cadastrocliente = new Cadastrocliente();
  }  
  
}
