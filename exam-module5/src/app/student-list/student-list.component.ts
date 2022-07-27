import {Component, OnInit} from '@angular/core';
import {StudentService} from '../student.service';
import {Student} from '../student';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  totalLength: any;
  page = 1;
  studentList: Student[] = [];

  constructor(private studentService: StudentService, private toartrs: ToastrService) {
  }

  ngOnInit(): void {
    this.StudentListSearch();
    this.reloadListStudent();
    this.getListStudent();
  }

  getListStudent() {
    this.studentService.getListStudent().subscribe(value => {
      this.studentList = value;
      this.totalLength = value.length;
    });
  }


  sendDataEdit(students: Student) {
    this.studentService.getDataEditFromList(students);
  }

  sendDataDelete(students: Student) {
    this.studentService.getDataDeleteFromList(students);
  }

  reloadListStudent() {
    this.studentService.channelLoadList.subscribe(value => {
      if (value !== undefined) {
        this.toartrs.success(value, 'THÔNG BÁO');
        this.getListStudent();
      }
    });
  }

  StudentListSearch() {
    this.studentService.channelSearch.subscribe(value => {
      if (value !== undefined) {
        this.studentList = value;
        if (value.length === 0) {
          this.toartrs.error('Không tìm thấy', 'THÔNG BÁO');
        }
      }
    });
  }
}
