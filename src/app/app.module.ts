import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeadlinesComponent } from './headlines/headlines.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { NavbarItemComponent } from './navbar-item/navbar-item.component';
import { BodyComponent } from './body/body.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard/:role', component: DashboardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeadlinesComponent,
    FeedbackComponent,
    NavbarItemComponent,
    BodyComponent,
    FeedbackFormComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
