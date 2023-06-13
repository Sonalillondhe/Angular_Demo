import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AddressComponent } from './address/address.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { BasicDetailsComponent } from './basic-details/basic-details.component';

const routes: Routes = [
  
 { path:"Login",component:LoginComponent },
 { path:"Registration",component:RegistrationComponent ,
 
children:[
  { path:"Address",component:AddressComponent },
  { path:"PersonalDetails",component:PersonalDetailsComponent },
  { path:"basicDetails",component:BasicDetailsComponent},

]

},


  
    
  ];


  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
