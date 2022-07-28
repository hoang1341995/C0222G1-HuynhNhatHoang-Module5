import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Student} from '../student';
import {TicketService} from '../ticket.service';

@Component({
  selector: 'app-ticket-search',
  templateUrl: './ticket-search.component.html',
  styleUrls: ['./ticket-search.component.css']
})
export class TicketSearchComponent implements OnInit {

  key = new FormControl();
  studentList: Student[] = [];
  tickerSearchForm = FormGroup;

  constructor(private ticketService: TicketService) {
    // @ts-ignore
    this.tickerSearchForm = new FormGroup({
      startPointSearch: new FormControl(),
      endPointSearch: new FormControl(),
      startDate: new FormControl(),
      endDate: new FormControl()
    });
  }

  ngOnInit(): void {
  }

  search() {
    // this.ticketService.searchByName(this.key.value).subscribe(value => {
    //   this.studentList = value;
    //   this.ticketService.StudentListSearch(this.studentList);
    //   this.studentList = [];
    // });
  }

}
