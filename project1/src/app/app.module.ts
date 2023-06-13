import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HomeStayComponent } from './home-stay/home-stay.component';
import { HolidayPakageComponent } from './holiday-pakage/holiday-pakage.component';
import { FlightsComponent } from './flights/flights.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { BasicDetailsComponent } from './basic-details/basic-details.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { AddressComponent } from './address/address.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    HomeStayComponent,
    HolidayPakageComponent,
    FlightsComponent,
    PagenotfoundComponent,
    UserRegistrationComponent,
    BasicDetailsComponent,
    PersonalDetailsComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
