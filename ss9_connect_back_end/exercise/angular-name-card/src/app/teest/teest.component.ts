import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teest',
  templateUrl: './teest.component.html',
  styleUrls: ['./teest.component.css']
})
export class TeestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showText(message: string) {
    alert(message);
  }

}
