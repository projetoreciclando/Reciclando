import { Component, OnInit } from '@angular/core';
import { Cadastrovendedor } from '../cadastrovendedor';
import { CadastrovendedorService } from '../cadastrovendedor.service';
import { CadastrovendedorDadosService } from '../cadastrovendedor-dados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrovendedor',
  templateUrl: './cadastrovendedor.page.html',
  styleUrls: ['./cadastrovendedor.page.scss'],
})

export class CadastrovendedorPage implements OnInit {
  cadastrovendedor: Cadastrovendedor;
  key: string= '';

  constructor(private cadastrovendedorService: CadastrovendedorService, private cadastrovendedorDataService: CadastrovendedorDadosService, private router: Router) { 

  }

  ngOnInit() {
    this.cadastrovendedor = new Cadastrovendedor();
    this.cadastrovendedorDataService.currentCadastrovendedor.subscribe(data =>{
      if (data.cadastrovendedor && data.key){
        this.cadastrovendedor = new Cadastrovendedor();
        this.cadastrovendedor.nome = data.cadastrovendedor.nome;
        this.cadastrovendedor.email = data.cadastrovendedor.email;
        this.cadastrovendedor.senha = data.cadastrovendedor.senha;
        this.cadastrovendedor.cnpj = data.cadastrovendedor.cnpj;
        this.cadastrovendedor.telefone = data.cadastrovendedor.telefone;
        this.cadastrovendedor.endereco = data.cadastrovendedor.endereco;
        this.cadastrovendedor.complemento = data.cadastrovendedor.complemento;
        this.cadastrovendedor.estado = data.cadastrovendedor.estado;
        this.cadastrovendedor.cep = data.cadastrovendedor.cep;
        this.key = data.key;
      }
    });
  }

 // Não sei oq por aqui// 
  onSubmit(){
    this.cadastrovendedorService.insert(this.cadastrovendedor);
    this.router.navigate(['/cadastro']);
    this.cadastrovendedor = new Cadastrovendedor();
  }  
  

}
