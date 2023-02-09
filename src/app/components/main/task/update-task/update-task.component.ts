import { Component } from '@angular/core';
import { Status } from '../Status';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent {

task: Task = {
  title: '',
  description: '',
  status: Status.TODO
}

constructor(
  private service: TaskService,
  private router: Router,
  private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']
    this.service.findById(parseInt(id!)).subscribe((task) => this.task = task)
  }

  updateTask() {
  this.service.update(this.task).subscribe(() => {
    this.router.navigate(['list-tasks'])
  })
  }

  deleteTask() {
    this.service.delete(this.task).subscribe(() => {
      this.router.navigate(['list-tasks'])
    })
  }
}
