import {Component, OnInit} from '@angular/core';
import {StudentService} from '../student.service';
import {Student} from '../student';

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.css']
})
export class StudentDeleteComponent implements OnInit {

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

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.getDataDeleteFromList();
  }

  getDataDeleteFromList() {
    this.studentService.obserData.subscribe(value => {
      if (value !== undefined) {
        this.student = value;
      }
    });
  }

  deleteStudent() {
    this.studentService.deleteStudent(this.student).subscribe(res => {
      this.studentService.loadListForStudentList('Xóa thành công');
    });
  }

}
