import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLandingPageComponent } from './main-landing-page/main-landing-page.component';
import { CategoryMensComponent } from './category-mens/category-mens.component';
import { CategoryWomensComponent } from './category-womens/category-womens.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLandingPageComponent,
    CategoryMensComponent,
    CategoryWomensComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
