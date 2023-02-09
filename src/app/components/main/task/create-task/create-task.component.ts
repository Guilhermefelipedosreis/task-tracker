import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../task';
import { TaskService } from './../task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {

  constructor(
    private service: TaskService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) {}

    task: Task = {
      title: '',
      description: '',
      status: this.activatedRoute.snapshot.params['status']
    }

  submit() {
    this.service.create(this.task).subscribe(() => {
      this.router.navigate(['/list-tasks'])
    });
  }
}




