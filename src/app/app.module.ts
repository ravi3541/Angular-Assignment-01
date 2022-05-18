import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeScreenComponent } from './feature/welcome-screen/welcome-screen.component';
import { ProductListComponent } from './feature/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './feature/add-product/add-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './feature/product-details/product-details.component';
import { AuthModule } from './auth/auth.module';
import { FeatureModule } from './feature/feature.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    AuthModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
