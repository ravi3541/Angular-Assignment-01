import { NgModule } from '@angular/core';
import { PreloadingStrategy, RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './auth/not-found/not-found.component';
import { UnauthorizedComponent } from './auth/unauthorized/unauthorized.component';


const routes: Routes = [
  {path:'',redirectTo:'auth',pathMatch:'full'},
  {path:'auth',loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path:'feature',loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule)},
  {path:'unauthorized',component:UnauthorizedComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
