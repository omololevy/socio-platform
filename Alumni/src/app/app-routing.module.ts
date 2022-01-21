import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';

const routes: Routes = [
 
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
