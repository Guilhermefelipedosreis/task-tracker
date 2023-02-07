import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  listTask: Task[] = [];

  @Input() task: Task = {
    id: 0,
    title: 'title',
    description: 'something',
    status: 'todo',
    commentId: 0,
    userId: 0,

  }

}
