import { Component, OnInit } from '@angular/core';
import {TodosService} from '../service/todos.service';
import {delay} from 'rxjs/operators';
import {Todo} from '../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  private loading = true;
  private title = '';
  private searchString = '';

  constructor(private todosService: TodosService) { }

  ngOnInit() {
    this.todosService.fetchTodos()
      .pipe(delay(500))
      .subscribe(() => {
      this.loading = false;
    });
  }

  onChange(id: number) {
    this.todosService.onToggle(id);
  }

  removeTodo(id: number) {
    this.todosService.removeTodo(id);
  }

  addTodo() {
    const todo: Todo = {
      title: this.title,
      id: Date.now(),
      completed: false
    };
    this.todosService.addTodo(todo);
    this.title = '';
  }
}
