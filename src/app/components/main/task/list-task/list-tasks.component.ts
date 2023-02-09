import { Component, Input, OnInit } from '@angular/core';
import { Status } from '../Status';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {

  listTask: Task[] = [];

  constructor (private service: TaskService) {}

  ngOnInit(): void {
    this.service.list().subscribe((listTask) => {
      this.listTask = listTask
    })
  }

  StatusEnum = Status

  checkStatus(task: Task, status: Status): boolean {
    return Status[task.status] as unknown === status
  }

}
