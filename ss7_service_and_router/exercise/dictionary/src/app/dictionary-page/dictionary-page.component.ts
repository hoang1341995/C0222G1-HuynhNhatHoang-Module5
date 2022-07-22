import { Component, OnInit } from '@angular/core';
import {Dictionary} from '../dictionary';
import {DictinaryService} from '../dictinary.service';

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {

  // @ts-ignore
  dictionarys: Dictionary[];
  constructor(private dictionaryService: DictinaryService) { }

  ngOnInit(): void {
    this.dictionarys = this.dictionaryService.getAll();
  }

}
