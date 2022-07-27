import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {StudentService} from '../student.service';
import {Student} from '../student';

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['./student-search.component.css']
})
export class StudentSearchComponent implements OnInit {

  key = new FormControl();
  studentList: Student[] = [];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
  }

  search() {
    this.studentService.searchByName(this.key.value).subscribe(value => {
      this.studentList = value;
      this.studentService.StudentListSearch(this.studentList);
      this.studentList = [];
    });
  }
}
