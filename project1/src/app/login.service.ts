import { Injectable } from '@angular/core';
import { flatMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  isloggin:boolean=false;

  isloggedIn(){
     return this.isloggin;
  }
}
