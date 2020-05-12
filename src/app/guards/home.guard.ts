import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router){}
  canActivate(): Promise<boolean>{
    return new Promise(resolve =>{
      this.authService.getAuth().onAuthStateChanged(user =>{
        if (user) this.router.navigate(['tabs']);
        resolve(!user ? true : false);
      })
    })
  }  
} 
