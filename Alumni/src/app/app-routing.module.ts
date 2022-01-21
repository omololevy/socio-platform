import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './components/home-page/home-page/home-page.component';
import { BlogsComponent } from './components/blogs/blogs/blogs.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'blogs', component: BlogsComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]


})
export class AppRoutingModule { }
