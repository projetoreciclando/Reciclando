import { Component, OnInit } from '@angular/core';
import { Cadastrocliente } from '../cadastrocliente';
import { CadastroclienteService } from '../cadastrocliente.service';
import { CadastroclienteDadosService } from '../cadastrocliente-dados.service';
import { Router, RouterModule } from '@angular/router';
import { LoadingController, ToastController, IonSlides } from "@ionic/angular";
import { User } from 'src/app/user';
import { AuthService } from "src/app/auth.service";
import { FormGroup, FormBuilder, Validators, FormControl, ReactiveFormsModule   } from '@angular/forms';

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
  validations_form: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';
  
  validation_messages = {
    'email': [
      { type: 'required', message: 'E-mail válido nescessario' },
      { type: 'pattern', message: 'E-mail válido nescessario' }
    ],


    'password': [
      { type: 'required', message: 'Senha nescessária' },
      { type: 'minlength', message: 'Senha deve ter ao menos 5 caracteres' }
      
    ],
    'password2': [
      { type: 'required', message: 'Senha nescessária' },
      { type: 'minlength', message: 'Senha deve ter ao menos 5 caracteres' }
    ]
  };


  constructor(private cadastroclienteService: CadastroclienteService, private cadastroclienteDataService: CadastroclienteDadosService,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public authService: AuthService,
    public router: Router,
    public formBuilder: FormBuilder
    ) { 

  } 

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
      password2: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
      displayName: new FormControl('', Validators.compose([       
      ])),
      cpf: new FormControl('', Validators.compose([       
      ])),
      telefone: new FormControl('', Validators.compose([       
      ])),
      end: new FormControl('', Validators.compose([       
      ])),
      estado: new FormControl('', Validators.compose([       
      ])),
      cep: new FormControl('', Validators.compose([       
      ])),
      tipo: new FormControl('', Validators.compose([       
      ])),
    },{
      validators: this.password.bind(this)
    });
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
      this.successMessage = "Cadastro Realizado!";
      this.router.navigate(['home']);
    }
  }

  password(validations_form: FormGroup) {
    const { value: password } = validations_form.get('password');
    const { value: confirmPassword } = validations_form.get('password2');
    return password === confirmPassword ? null : { passwordNotMatch: true };
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
