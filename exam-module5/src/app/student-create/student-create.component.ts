import {Component, OnInit} from '@angular/core';
import {StudentService} from '../student.service';
import {Class} from '../class';
import {Student} from '../student';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

  classList: Class[] = [];

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
      id: new FormControl(1),
      name: new FormControl()
    }),
  });

  constructor(private studenService: StudentService) {
  }

  ngOnInit(): void {
    this.getClassList();
  }

  saveStudent() {
    this.student = this.studentForm.value;
    for (const values of this.classList) {
      if (values.id == this.student.class.id) {
        this.student.class.name = values.name;
        break;
      }
    }
    this.studenService.addNewStudent(this.student).subscribe(value => {
      this.studenService.loadListForStudentList('Thêm mới thành công');
    });

  }

  getClassList() {
    this.studenService.getListClass().subscribe(value => {
      this.classList = value;
    });
  }
}
