import {Injectable} from '@angular/core';
import {Todo} from '../models/Todo';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class TodosService {
  public todos: Todo[] = [];
  private url = 'https://jsonplaceholder.typicode.com/todos?_limit=10';

  constructor(private http: HttpClient) {}

  fetchTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url)
      .pipe(tap( todos => this.todos = todos));
  }

  onToggle(id: number) {
    const idx = this.todos.findIndex(t => t.id === id);
    this.todos[idx].completed = !this.todos[idx].completed;
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter(t => t.id !== id);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
}
