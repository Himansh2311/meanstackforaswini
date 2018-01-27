import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { FormsModule  } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import {FlashMessagesService} from 'angular2-flash-messages';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { ContainerComponent } from './container/container.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductsComponent } from './products/products.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';
import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {AuthGuard} from './guards/auth.guard';
// const routes : Routes =[
//   {path :'',component:BannerComponent},
//   {path :'/login',component:LoginComponent},
//   {path :'/register',component:RegisterComponent}

// ]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    BannerComponent,
    ContainerComponent,
    LoginComponent,
    RegisterComponent,
    CheckoutComponent,
    ContactusComponent,
    ProductsComponent,
    SingleproductComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule, AppRoutingModule,
    FlashMessagesModule
  ],
  providers: [ValidateService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

//platformBrowserDynamic().bootstrapModule(AppModule);
