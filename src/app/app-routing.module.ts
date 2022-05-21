import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { UnauthorizedComponent } from './auth/unauthorized/unauthorized.component';


const routes: Routes = [
  {path:'',redirectTo:'auth',pathMatch:'full'},
  {path:'auth',loadChildren: () => import('./auth/auth.module').then(am => am.AuthModule)},
  {path:'feature',loadChildren: () => import('./feature/feature.module').then(fm => fm.FeatureModule)},
  
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(){
    console.warn("app module loaded")
  }
 }
