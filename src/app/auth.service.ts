import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {Router } from '@angular/router';
import { User } from "src/app/user";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;

  constructor(private afa: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private ngZone: NgZone) { 
      this.afa.authState.subscribe(user =>{
        if (user){
          this.userData = user;
          localStorage.setItem('user', JSON.stringify(this.userData));
          JSON.parse(localStorage.getItem('user'));
        } else{
          localStorage.setItem('user', null);
          JSON.parse(localStorage.getItem('user'));
        }
      })
    }

  login(user: User){
    return this.afa.signInWithEmailAndPassword(user.email, user.password);
  }

  register(user: User){
    return this.afa.createUserWithEmailAndPassword(user.email, user.password);
    
  }

  PasswordRecover(passwordResetEmail) {
    return this.afa.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('Password reset email has been sent, please check your inbox.');
    }).catch((error) => {
      window.alert(error)
    })
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  SetUserData(user: User){
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {      
      email: user.email,
      displayName: user.displayName,
      cpf: user.cpf,
      telefone: user.telefone,
      end: user.end,
      estado: user.estado,
      cep: user.cep,
      tipo: user.tipo
    }
    return userRef.set(userData,{
      merge: true
    })
  }

  logout(){
    return this.afa.signOut();
  }

  getAuth(){
    return this.afa.authState  
  }

}
