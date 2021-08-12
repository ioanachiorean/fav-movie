
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavButtonComponent } from './fav-button/fav-button.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NavPillsComponent } from './nav-pills/nav-pills.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FavButtonComponent,
    SignupFormComponent,
    NavPillsComponent,
    NewCourseFormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
