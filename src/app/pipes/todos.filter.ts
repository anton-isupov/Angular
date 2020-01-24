import {Pipe, PipeTransform} from '@angular/core';
import {Todo} from '../models/Todo';

@Pipe({
  name: 'todosFilter'
})
export class TodosFilter implements PipeTransform {

  transform(todos: Todo[], search: string): Todo[] {
    if (!search) { return todos; }

    return todos.filter(todo => {
      return todo.title.toLowerCase().indexOf(search) !== -1;
    });
  }

}
