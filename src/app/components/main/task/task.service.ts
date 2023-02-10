import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Status } from './Status';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private API = 'http://localhost:8080/tasks'

  constructor(private http: HttpClient) {}

  list(): Observable<Task[]> {
    return this.http.get<Task[]>(this.API)
  }

  create(task: Task): Observable<Task> {
    return this.http.post<Task>(this.API, task)
  }

  update(task: Task):Observable<Task> {
    const url = `${this.API}/${task.id}`
    return this.http.put<Task>(this.API, task)
  }

  delete(task: Task) {
    const url = `${this.API}/${task.id}`
    return this.http.delete<Task>(url)
  }

  findById(id: number): Observable<Task> {
    const url = `${this.API}/${id}`
    return this.http.get<Task>(url)
  }
}
