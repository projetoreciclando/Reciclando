import { Component } from '@angular/core';
import { LoadingController, ToastController, IonSlides } from "@ionic/angular";
import { User } from 'src/app/user';
import { AuthService } from "src/app/auth.service";

import { Router } from "@angular/router";


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page{
  
  
  public userLogin: User = {};
  public userRegister: User = {};
  private loading: any;

  constructor(
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public authService: AuthService,
    public router: Router) {}

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
    
  async ngOnInit() {  
    await this.presentLoading();
    try{
      await this.authService.getUser()         
    } catch(error){
      console.error(error);
      this.presentToast(error);
    } finally{
      this.loading.dismiss();     
    }
  }


}

