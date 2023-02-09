import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SigninComponent } from './components/main/autorization/signin/signin.component';
import { SignupComponent } from './components/main/autorization/signup/signup.component';
import { HomeComponent } from './components/main/home/home.component';
import { CreateTaskComponent } from './components/main/task/create-task/create-task.component';
import { ListTasksComponent } from './components/main/task/list-task/list-tasks.component';
import { UpdateTaskComponent } from './components/main/task/update-task/update-task.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent,
    ListTasksComponent,
    CreateTaskComponent,
    UpdateTaskComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
