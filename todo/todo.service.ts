import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todoList: Array<any> = new Array<any>();
  constructor(private http: HttpClient) { }

  getTasks(): Observable<any[]> {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
  }

  addNewTask(todo: any): void {
    this.todoList.push(todo);
  }
}
