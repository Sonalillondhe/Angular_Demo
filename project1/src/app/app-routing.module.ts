import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelsComponent } from './hotels/hotels.component';
import { HomeStayComponent } from './home-stay/home-stay.component';
import { HolidayPakageComponent } from './holiday-pakage/holiday-pakage.component';
import { FlightsComponent } from './flights/flights.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AddressComponent } from './address/address.component';
import { BasicDetailsComponent } from './basic-details/basic-details.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { AuthguardGuard } from './authguard.guard';
import { RoutrguardGuard } from './routrguard.guard';

const routes: Routes = [
  
{ path:"Hotels",component:HotelsComponent },
{ path:"HomeStay",component:HomeStayComponent },
{ path:"login",component:HolidayPakageComponent,canActivate:[AuthguardGuard]},
{ path:"Flight",component:FlightsComponent },
{path:"user-registration",component:UserRegistrationComponent,canActivateChild:[RoutrguardGuard],
  children:[
     {path:"basic-details",component:BasicDetailsComponent,},
     {path:"personal-details",component:PersonalDetailsComponent},
     {path:"address",component:AddressComponent}
  ]},



{ path:"",redirectTo:"/Hotels" ,pathMatch:"full" }, //default route
{ path:"**",component:PagenotfoundComponent  }//wildcard route


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
