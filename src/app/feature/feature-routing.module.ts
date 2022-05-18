import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';

const routes: Routes = [
  // {path:'',redirectTo:'/welcome',pathMatch:'full'},
  {path:"welcome",component:WelcomeScreenComponent},
  {path:"productList",component:ProductListComponent},
  { path:'addProduct',component:AddProductComponent},
  { path:'viewProduct/:id',component:ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
