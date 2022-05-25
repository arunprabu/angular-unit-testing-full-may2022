import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: [
  ]
})
export class TodoComponent implements OnInit {

  todoList: any[] = [];
  todoTitle: string = '';

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.todoService.getTasks().subscribe(todos => this.todoList = todos);
  }

  addNew(): void {
    // this.todoService.addNewTask(new Todo(this.todoTitle, this.todoBody));
    console.log(this.todoTitle);
  }

}
