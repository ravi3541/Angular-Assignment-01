import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeScreenComponent } from './feature/welcome-screen/welcome-screen.component';
import { ProductListComponent } from './feature/product-list/product-list.component';
import { AddProductComponent } from './feature/add-product/add-product.component';
import { ProductDetailsComponent } from './feature/product-details/product-details.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
