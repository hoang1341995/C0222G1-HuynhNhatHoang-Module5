import { Injectable } from '@angular/core';
import {Dictionary} from './dictionary';

@Injectable({
  providedIn: 'root'
})
export class DictinaryService {

  dictionarys: Dictionary[] = [
    {vi: 'đỏ', en: 'red'},
    {vi: 'vàng', en: 'yellow'},
    {vi: 'tím', en: 'violet'},
    {vi: 'trắng', en: 'white'},
    {vi: 'xanh', en: 'blue'}
  ];


  getAll(): Dictionary[] {
    return this.dictionarys;
  }

  findKeyInDictionary(key: string): Dictionary {
    return this.dictionarys.find(val => val.en === key);
  }
  constructor() { }

}
