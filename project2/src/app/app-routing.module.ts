import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [

  {path:"Home",component:HomeComponent},
  {path:"ProductList",component:ProductListComponent},
  {path:"ProductDetails/:id/:price",component:ProductDetailsComponent},
  {path:"",redirectTo:"/Home" ,pathMatch:"full"},
  { path:"**",component:PagenotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
