import {Component, OnInit, ViewChild} from '@angular/core';
import {Todo} from '../todo';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TodoService} from './todo.service';
import {TeestComponent} from '../teest/teest.component';

// tslint:disable-next-line:variable-name
let _id = 1;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  content = new FormControl();


  todosimple: Todo = {
    id: 0,
    content: '',
    complete: false
  };
  todo: Todo;

  contentEdit: string;

  constructor(private todoService: TodoService, private test: TeestComponent) {
  }

  ngOnInit() {
    this.getListTodo();
  }

  toggleTodo(i: number) {
    this.todos[i].complete = !this.todos[i].complete;
  }

  change() {
    const value = this.content.value;
    if (this.todosimple.id !== 0) {
      this.todo = {
        id: this.todosimple.id,
        content: value,
        complete: false
      };
      this.editTodo(this.todo);
    } else {
      if (value) {
        this.todo = {
          content: value,
          complete: false
        };
        this.addTodo(this.todo);
      }
    }
  }

  editTodo(todo: Todo) {
    this.todoService.editTodo(todo).subscribe(res => {
      this.content.reset();
      this.getListTodo();
    });
  }

  addTodo(todo: Todo) {
    this.todoService.addTodo(todo).subscribe(res => {
      this.content.reset();
      this.getListTodo();
    });
  }

  getListTodo() {
    this.todoService.getListTodo().subscribe(values => {
      this.todos = values;
    });
  }

  // tslint:disable-next-line:variable-name
  deleteTodo(id: number) {
    this.todoService.deleteTodo(id).subscribe();
    this.getListTodo();
  }

  getDataEditTodo(todo: Todo) {
    // @ts-ignore
    this.contentEdit = todo.content;
    this.todosimple = todo;
    this.test.showText('123123');

  }
}
