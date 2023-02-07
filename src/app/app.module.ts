import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/main/home/home.component';
import { SignupComponent } from './components/main/autorization/signup/signup.component';
import { SigninComponent } from './components/main/autorization/signin/signin.component';
import { ListTasksComponent } from './components/main/task/list-task/list-tasks.component';
import { CreateTaskComponent } from './components/main/task/create-task/create-task.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent,
    ListTasksComponent,
    CreateTaskComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
