import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Student} from './student';
import {Class} from './class';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  // @ts-ignore
  data = new BehaviorSubject<Student>();
  obserData = this.data.asObservable();

  studentList: Student[] = [];


  // @ts-ignore
  dataChannelLoadList = new BehaviorSubject<any>();
  channelLoadList = this.dataChannelLoadList.asObservable();

  // @ts-ignore
  dataSearchChannel = new BehaviorSubject<any>();
  channelSearch = this.dataSearchChannel.asObservable();

  URL_API = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) {
  }

  getListStudent(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.URL_API + 'student');
  }

  // @ts-ignore
  getListClass(): Observable<Class[]> {
    return this.httpClient.get<Class[]>(this.URL_API + 'class');
  }

  getDataEditFromList(students: Student) {
    this.data.next(students);
  }

  getDataDeleteFromList(students: Student) {
    this.data.next(students);
  }

  deleteStudent(students: Student): Observable<Student> {
    return this.httpClient.delete<Student>(this.URL_API + 'student/' + students.id);
  }

  loadListForStudentList(message: any) {
    this.dataChannelLoadList.next(message);
  }

  StudentListSearch(students: Student[]) {
    this.dataSearchChannel.next(students);
  }

  // @ts-ignore
  saveStudent(students: Student): Observable<Student> {
    return this.httpClient.patch<Student>(this.URL_API + 'student/' + students.id, students);
  }

  addNewStudent(students: Student): Observable<Student> {
    return this.httpClient.post<Student>(this.URL_API + 'student', students);
  }

  searchByName(key: string) {
    return this.httpClient.get<Student[]>(this.URL_API + 'student?name_like=' + key);
  }


}
