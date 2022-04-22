import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  { path:'home',component:WelcomeScreenComponent },
  { path:'',component:WelcomeScreenComponent },
  { path:'productList',component:ProductListComponent},
  { path:'add-product',component:AddProductComponent},
  { path:'view-product/:id',component:ProductDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
