import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
// import { AuthModule } from '../auth/auth.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddProductComponent } from './add-product/add-product.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import {  ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    AddProductComponent,
    WelcomeScreenComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    ReactiveFormsModule
    
  ]
})

export class FeatureModule {
  constructor(){
    console.warn("Feature module loaded")
  }
 }
