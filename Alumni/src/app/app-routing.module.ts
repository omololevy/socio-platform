import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';

import { HomePageComponent } from './components/home-page/home-page/home-page.component';
import { BlogsComponent } from './components/blogs/blogs/blogs.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'blogs', component: BlogsComponent },
  

 
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: '**', redirectTo: 'index', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]


})
export class AppRoutingModule { }
