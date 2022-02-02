import { ChatsComponent } from './components/chats/chats.component';
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
import { CohortComponent } from './components/cohort/cohort.component';
import { FundraisersComponent } from './components/fundraisers/fundraisers.component';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: 'home', component: HomePageComponent },
  {path: 'blogs', component: BlogsComponent },
  {path: 'channels/:id', component: ChannelsComponent,  data:{requiresLogin: true}},
  {path: 'user_profile/:id', component: UserProfileComponent},
  {path: 'about', component: AboutUsComponent },
  {path: 'update_profile/:id', component: UpdateProfileComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: '**', redirectTo: 'index', pathMatch: 'full'},
  {path: 'create_cohort/:id', component: CreateCohortComponent},
  {path: 'cohort/:id', component: CohortComponent},
  {path: 'chats/:id', component: ChatsComponent},
  {path: 'fundraiser/:id', component: FundraisersComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]


})
export class AppRoutingModule { }
