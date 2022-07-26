import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from '../todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private API_URL = 'http://localhost:3000/todo';

  constructor(private httpClient: HttpClient) {
  }

  getListTodo(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.API_URL);
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.httpClient.post<Todo>(this.API_URL, todo);
  }

  deleteTodo(id: number): Observable<Todo> {
    return this.httpClient.delete<Todo>(this.API_URL + '/' + id);
  }

  editTodo(todo: Todo) {
    return this.httpClient.patch<Todo>(this.API_URL + '/' + todo.id, todo);
  }

}
