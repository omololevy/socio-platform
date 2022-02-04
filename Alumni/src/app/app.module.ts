import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { BlogsComponent } from './components/blogs/blogs/blogs.component';
import { HomePageComponent } from './components/home-page/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChannelsComponent } from './components/channels/channels.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateCohortComponent } from './components/create-cohort/create-cohort.component';
import { PhotoUploadComponent } from './components/photo-upload/photo-upload.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ChatsComponent } from './components/chats/chats.component';
import { FundraisersComponent } from './components/fundraisers/fundraisers.component';
import { CohortComponent } from './components/cohort/cohort.component';
import { CardsComponent } from './components/cards/cards.component';
import { GroupPostsComponent } from './components/group-posts/group-posts.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { MyDashboardComponent } from './components/my-dashboard/my-dashboard.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { LoginOptionsComponent } from './components/login-options/login-options.component';
import { FundComponent } from './components/fund/fund.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ContactUsComponent,
    BlogsComponent,
    HomePageComponent,
    NavbarComponent,
    UpdateProfileComponent,
    LoginComponent,
    RegisterComponent,
    ChannelsComponent,
    SidebarComponent,
    UserProfileComponent,
    CreateCohortComponent,
    PhotoUploadComponent,
    ContactsComponent,
    ChatsComponent,
    FundraisersComponent,
    CohortComponent,
    CardsComponent,
    GroupPostsComponent,
    AllPostsComponent,
    MyDashboardComponent,
    PostFormComponent,
    LoginOptionsComponent,
    FundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSliderModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
