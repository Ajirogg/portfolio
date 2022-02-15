import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() { }

  languageSubject = new Subject<number>();

  language : number = 0;

  emitLanguageSubjects(){
    this.languageSubject.next(this.language);
  }

  changeLanguage(){
    if(this.language == 0){
      this.language = 1;
    } else {
      this.language = 0;
    }

    this.emitLanguageSubjects();
  }
}
