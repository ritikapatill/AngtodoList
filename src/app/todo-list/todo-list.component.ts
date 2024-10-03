import { Component } from '@angular/core';
import { ITask } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  tasks: ITask[] = [];
  constructor(private todoService: TodoService) {}
  ngOnInit() {
    this.loadTasks();
  }
  loadTasks() {
    this.todoService.getTasks().subscribe((data) => this.tasks=data);
  }
}
