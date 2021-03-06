import { Component } from '@angular/core';
import { LoadingController, ToastController, IonSlides } from "@ionic/angular";
import { User } from 'src/app/user';
import { AuthService } from "src/app/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  

  public userLogin: User = {};
  public userRegister: User = {};
  private loading: any;
  constructor(
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public authService: AuthService,
    public router: Router
  ) {}

  async sair(){
    await this.presentLoading();
    try{
      await this.authService.logout();
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
    
}
