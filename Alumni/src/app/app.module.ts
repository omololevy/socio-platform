import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
=======
import { BlogsComponent } from './components/blogs/blogs/blogs.component';
import { HomePageComponent } from './components/home-page/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
>>>>>>> f0c948b649f1c386cfe0a7129a5678a1ab99e3ca

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    AboutUsComponent,
    ContactUsComponent
=======
    BlogsComponent,
    HomePageComponent,
    NavbarComponent,

    LoginComponent,
    RegisterComponent
>>>>>>> f0c948b649f1c386cfe0a7129a5678a1ab99e3ca
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
