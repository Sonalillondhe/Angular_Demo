import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class RoutrguardGuard implements CanActivateChild {
  constructor(private ser:LoginService,private route:Router){}
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
      if(this.ser.isloggedIn()){
        return true;
      }else
      {
        alert("you have no access ");
        this.route.navigate(['/Hotels']);
    return false;
      }
  }
  
}
