import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SilverGuard implements CanActivate {

  constructor(private authSvc: AuthService, private router: Router) {}
  
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    
    if(this.authSvc.silverAux){
      return true;
    }
    //redirigir
    this.router.navigate(['/listado']);
    return false;


  }
  
}
