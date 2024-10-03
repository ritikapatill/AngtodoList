import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITask } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  baseURL = 'http://localhost:5000/tasks'; // Your API endpoint

  constructor(private http: HttpClient) {}

  getTasks(): Observable<ITask[]> {
    return this.http.get<ITask[]>(this.baseURL);
  }

  addTasks(task: ITask): Observable<ITask> {
    return this.http.post<ITask>(this.baseURL, task);
  }

  deleteTasks(id: number | string): Observable<void> {
    return this.http.delete<void>(`${this.baseURL}/${id}`);
  }
}
