import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController, ToastController, IonSlides } from "@ionic/angular";
import { User } from 'src/app/user';
import { AuthService } from "src/app/auth.service";

import { Router } from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonSlides, null) slides: IonSlides;

  public userLogin: User = {};
  public userRegister: User = {};
  private loading: any;

  constructor(
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public authService: AuthService,
    public router: Router
  ) { }

  async login(){
    await this.presentLoading();
    try{
      await this.authService.login(this.userLogin);      
    } catch(error){
      console.error(error);
      this.presentToast(error);
    } finally{
      this.loading.dismiss();
      this.router.navigate(['tabs']);
    }
  }
  mudarPagina(){
    this.router.navigate(['cadastrologin']);
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
  }

}
