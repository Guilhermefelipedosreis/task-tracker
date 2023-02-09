import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/main/autorization/signin/signin.component';
import { SignupComponent } from './components/main/autorization/signup/signup.component';
import { HomeComponent } from './components/main/home/home.component';
import { CreateTaskComponent } from './components/main/task/create-task/create-task.component';
import { ListTasksComponent } from './components/main/task/list-task/list-tasks.component';
import { UpdateTaskComponent } from './components/main/task/update-task/update-task.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'sign-in',
    component: SigninComponent
  },
  {
    path: 'sign-up',
    component: SignupComponent
  },
  {
    path: 'list-tasks',
    component: ListTasksComponent
  },
  {
    path: 'create-task/:status',
    component: CreateTaskComponent
  },
  {
    path: 'update-task/:id',
    component: UpdateTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
