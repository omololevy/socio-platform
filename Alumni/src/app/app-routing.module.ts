import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent} from './components/register/register.component';
import { ChannelsComponent} from './components/channels/channels.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AboutUsComponent} from './components/about-us/about-us.component'
import { HomePageComponent } from './components/home-page/home-page/home-page.component';
import { BlogsComponent } from './components/blogs/blogs/blogs.component';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { CreateCohortComponent } from './components/create-cohort/create-cohort.component';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: 'home', component: HomePageComponent },
  {path: 'blogs', component: BlogsComponent },
  {path: 'channels', component: ChannelsComponent,  data:{requiresLogin: true}},
  {path: 'user_profile', component: UserProfileComponent},
  {path: 'about', component: AboutUsComponent },
  {path: 'update_profile', component: UpdateProfileComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: '**', redirectTo: 'index', pathMatch: 'full'},
  {path: 'create_cohort', component: CreateCohortComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]


})
export class AppRoutingModule { }
