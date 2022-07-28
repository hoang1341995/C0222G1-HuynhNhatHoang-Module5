import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../model/category';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  public getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(API_URL + '/categories');
  }

  public saveCategory(category): Observable<Category> {
    return this.http.post<Category>(API_URL + '/categories', category);
  }

  public findById(id: number): Observable<Category> {
    return this.http.get<Category>(`${API_URL}/categories/${id}`);
  }

  public updateCategory(id: number, category: Category): Observable<Category> {
    return this.http.put<Category>(`${API_URL}/categories/${id}`, category);
  }

  public deleteCategory(id: number): Observable<Category> {
    return this.http.delete<Category>(`${API_URL}/categories/${id}`);
  }
}
