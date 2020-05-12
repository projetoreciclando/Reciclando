import { Component, OnInit } from '@angular/core';
import { Cadastrovendedor } from '../cadastrovendedor';
import { CadastrovendedorService } from '../cadastrovendedor.service';
import { CadastrovendedorDadosService } from '../cadastrovendedor-dados.service';
import { Router } from '@angular/router';
import { LoadingController, ToastController, IonSlides } from "@ionic/angular";
import { User } from 'src/app/user';
import { AuthService } from "src/app/auth.service";

@Component({
  selector: 'app-cadastrovendedor',
  templateUrl: './cadastrovendedor.page.html',
  styleUrls: ['./cadastrovendedor.page.scss'],
})

export class CadastrovendedorPage implements OnInit {
  public userLogin: User = {};
  public userRegister: User = {};
  private loading: any;
  cadastrovendedor: Cadastrovendedor;
  key: string= '';

  constructor(private cadastrovendedorService: CadastrovendedorService, private cadastrovendedorDataService: CadastrovendedorDadosService, private router: Router,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public authService: AuthService) { 

  }

  async registrar(){
    await this.presentLoading();
    try{      
      await this.authService.register(this.userRegister);
    } catch(error){
      console.error(error);
      this.presentToast(error);
    } finally{
      this.loading.dismiss();
      this.router.navigate(['home']);
    }
  }


  async presentLoading(){
    this.loading = await this.loadingCtrl.create({
      message: "Por favor, aguarde..."
    });
    return this.loading.present();
  }

  async presentToast(message: string){
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
    this.cadastrovendedor = new Cadastrovendedor();
    this.cadastrovendedorDataService.currentCadastrovendedor.subscribe(data =>{
      if (data.cadastrovendedor && data.key){
        this.cadastrovendedor = new Cadastrovendedor();
        this.cadastrovendedor.nome = data.cadastrovendedor.nome;
        this.cadastrovendedor.email2 = data.cadastrovendedor.email2;
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
