import { Component, OnInit } from '@angular/core';

import { LanguageService } from "src/Services/language.service";
import { Subscription } from 'rxjs';

import texts from "src/data/texts.json"
import { Resume } from 'src/Model/Resume';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})

export class CvComponent implements OnInit {

  language : number;
  languageSubscription: Subscription;


  texts: Resume;

  constructor(private languageService : LanguageService) { }

  ngOnInit(): void {
    this.languageSubscription = this.languageService.languageSubject.subscribe(
      (language: number) =>{
        this.language = language;
        if(this.language === 0){
          this.texts = texts.fr.Resume;
        } else {
          this.texts = texts.fr.Resume;
        }
      }
    );  

    this.languageService.emitLanguageSubjects();
  }

}
