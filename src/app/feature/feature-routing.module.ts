import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from '../auth/guard/auth-guard.guard';
import { RoleGuardGuard } from '../auth/guard/role-guard.guard';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';

const routes: Routes = [
  {path:'feature',children:[
    {path:'',redirectTo:'welcome',pathMatch:'full'},
    {path:'welcome',component:WelcomeScreenComponent,canActivate:[AuthGuardGuard]},
    {path:'product-list',component:ProductListComponent,canActivate:[AuthGuardGuard]},
    {path:'add-product',component:AddProductComponent,canActivate:[AuthGuardGuard,RoleGuardGuard]},
    {path:'product-details/:id',component:ProductDetailsComponent,canActivate:[AuthGuardGuard,RoleGuardGuard]},
    

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { 
  constructor(){
    console.warn("Feature module loaded")
  }
}
