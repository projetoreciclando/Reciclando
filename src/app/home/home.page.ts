import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController, ToastController, IonSlides } from "@ionic/angular";
import { User } from 'src/app/user';
import { AuthService } from "src/app/auth.service";
import { FormGroup, FormBuilder, Validators, FormControl, ReactiveFormsModule  } from '@angular/forms';

import { Router } from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonSlides, null) slides: IonSlides;

  validations_form: FormGroup;
  errorMessage: string = '';
  public userLogin: User = {};
  public userRegister: User = {};
  private loading: any;

  constructor(
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public authService: AuthService,
    public router: Router,    
    private formBuilder: FormBuilder
  ) { }
  ngOnInit() {
    this.validations_form = this.formBuilder.group({


      email: new FormControl('', Validators.compose([


        Validators.required,


        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')


      ])),


      password: new FormControl('', Validators.compose([


        Validators.minLength(5),


        Validators.required


      ])),


    });
  }

  validation_messages = {


    'email': [


      { type: 'required', message: 'E-mail nescessário.' },


      { type: 'pattern', message: 'Insira um e-mail válido.' }


    ],


    'password': [


      { type: 'required', message: 'Senha nescessária.' },


      { type: 'minlength', message: 'A senha deve ter ao menos 5 caracteres' }


    ]


  };




  
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
    this.router.navigate(['cadastro']);
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
