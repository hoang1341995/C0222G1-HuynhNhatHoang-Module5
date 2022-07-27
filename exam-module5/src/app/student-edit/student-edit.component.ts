// @ts-ignore

import {Component, OnInit} from '@angular/core';
import {StudentService} from '../student.service';
import {Class} from '../class';
import {FormGroup, FormControl} from '@angular/forms';
import {Student} from '../student';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  classList: Class[] = [];

  // studentForm = FormGroup;
  student: Student = {
    id: 0,
    name: '',
    birthday: '',
    email: '',
    phone: '',
    class: {
      id: 0,
      name: '',
    }
  };
  // @ts-ignore
  studentForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    birthday: new FormControl(),
    phone: new FormControl(),
    email: new FormControl(),
    class: new FormGroup({
      id: new FormControl(),
      name: new FormControl()
    }),
  });

  constructor(private studentService: StudentService) {

  }

  ngOnInit(): void {
    this.getDataFromList();
    this.getListClass();

  }

  getListClass() {
    this.studentService.getListClass().subscribe(value => {
      this.classList = value;
    });
  }

  getDataFromList() {
    this.studentService.obserData.subscribe(data => {
      if (data !== undefined) {
        this.studentForm.patchValue(data);
      }
    });
  }

  saveStudentEdit() {
    this.student = this.studentForm.value;
    for (const values of this.classList) {
      if (values.id == this.student.class.id) {
        this.student.class.name = values.name;
        break;
      }
    }
    this.studentService.saveStudent(this.student).subscribe(res => {
      this.studentService.loadListForStudentList('Sửa thành công');
    });
  }
}

