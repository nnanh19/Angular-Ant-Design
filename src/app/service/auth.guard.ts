import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor ( private router : Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ) : boolean{
      const userData = localStorage.getItem('user')
      if( userData != null){
        const {user} = JSON.parse(userData);
        if(user.role && user.role === 1){
          return true
        }else{
          this.router.navigateByUrl('/home')
          return false
        }
      }else{
        this.router.navigateByUrl('/auth/signin')
        return false
      }
  }
  
}
