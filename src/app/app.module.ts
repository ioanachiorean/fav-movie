
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavButtonComponent } from './fav-button/fav-button.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NavPillsComponent } from './nav-pills/nav-pills.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostComponentComponent } from './post-component/post-component.component';
import {  HttpClientModule } from '@angular/common/http';
import { PostService } from './post-component/services/post.service';

@NgModule({
  declarations: [
    AppComponent,
    FavButtonComponent,
    SignupFormComponent,
    NavPillsComponent,
    NewCourseFormComponent,
    ChangePasswordComponent,
    PostComponentComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ PostService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
