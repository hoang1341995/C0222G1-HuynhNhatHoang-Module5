import { Component, OnInit } from '@angular/core';
import {Dictionary} from '../dictionary';
import {DictinaryService} from '../dictinary.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {

  key: string;
  dictionary: Dictionary;
  constructor(private dictionaryService: DictinaryService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.key = this.activatedRoute.snapshot.params.key;
    console.log(this.key);
    this.dictionary = this.dictionaryService.findKeyInDictionary(this.key);
    console.log(this.dictionary);
  }

}
