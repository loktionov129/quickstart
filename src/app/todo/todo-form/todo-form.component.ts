import { Component } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'my-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {
  public title= '';

  constructor(private todoService: TodoService) {}

  public add(): void {
    this.todoService.add(this.title);
  }
}