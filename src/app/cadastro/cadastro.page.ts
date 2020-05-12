import { Component, OnInit } from '@angular/core';
import { Cadastrocliente } from '../cadastrocliente';
import { CadastroclienteService } from '../cadastrocliente.service';
import { CadastroclienteDadosService } from '../cadastrocliente-dados.service';
import { Router, RouterModule } from '@angular/router';
import { LoadingController, ToastController, IonSlides } from "@ionic/angular";
import { User } from 'src/app/user';
import { AuthService } from "src/app/auth.service";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})


export class CadastroPage implements OnInit {
  public userLogin: User = {};
  public userRegister: User = {};
  private loading: any;
  cadastrocliente: Cadastrocliente;
  key: string= '';

  constructor(private cadastroclienteService: CadastroclienteService, private cadastroclienteDataService: CadastroclienteDadosService,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public authService: AuthService,
    public router: Router
    ) { 

  }

  async registrar(){
    await this.presentLoading();
    try{      
      await this.authService.register(this.userRegister);
    } catch(error){
      console.error(error);
      this.presentToast(error);
    } finally{
      await this.authService.SetUserData(this.userRegister);
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


  ngOnInit() {}


  
}
