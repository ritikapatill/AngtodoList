import { Component } from '@angular/core';
import { ITask } from './todo.model';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angtodo1-app'; // Title property
  tasks: ITask[] = []; // Declare tasks array
  searchInput = ''; // Declare searchInput

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.todoService.getTasks().subscribe((data) => {
      console.log(data);
      this.tasks = data; // Load tasks from the service
    });
  }

  addTask() {
    const newTask: ITask = {
      id: crypto.randomUUID(),
      name: this.searchInput,
      completed: false,
    };
    this.todoService.addTasks(newTask).subscribe((task: ITask) => {
      console.log(task);
      this.tasks.push(task); // Use the returned task
      this.searchInput = ''; // Clear input field
    });
  }

  removeTask(id: number | string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.todoService.deleteTasks(id).subscribe(() => {
      console.log(`Task with id ${id} deleted.`); // Optional: log on delete
    });
  }

  updateTask(id: number | string) {
    console.log(id)
    const checkedTask = this.tasks.find((task) => task.id === id);
    if (checkedTask) {
      checkedTask.completed = !checkedTask.completed; 
    }
  }
}
