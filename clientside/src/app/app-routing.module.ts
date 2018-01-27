import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {LoginComponent } from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';
import {ContactusComponent} from './contactus/contactus.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {HeaderComponent} from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { BannerComponent } from './banner/banner.component';
import {ContainerComponent} from './container/container.component';
import {FlashMessagesService} from 'angular2-flash-messages';
import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {AuthGuard} from './guards/auth.guard';

// routing configuration
const routes: Routes = [
  // {path : '', component: ProductsComponent, pathMatch: 'full'},
  {path : 'login', component: LoginComponent},
 {path: 'register', component: RegisterComponent},
 {path : 'single', component: SingleproductComponent},
 {path : 'contact', component: ContactusComponent},
 {path: 'home', component: AppComponent},
 {path: 'Cart', component: CheckoutComponent},
 {path: 'dashboard', component: ContainerComponent},
//  {path:'dashboard', component: ProductsComponent,children:[
//    {path:'banner',component:BannerComponent,outlet:'banneroutlet'},
//    {path:'container',component:ContainerComponent,outlet:'containeroutlet'}
//  ]},
{path: '' , redirectTo: '/home', pathMatch: 'full'},
 { path: '**', component: AppComponent }
];


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FlashMessagesModule
  ],
  exports: [RouterModule],
   providers: [ValidateService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
