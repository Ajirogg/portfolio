import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LanguageService } from "src/Services/language.service";
import { Subscription } from 'rxjs';

import texts from "src/data/texts.json"
import { AboutMe } from 'src/Model/AboutMe';


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  
  language : number;
  languageSubscription: Subscription;


  texts: AboutMe;
  
  email: string;
  linkedin: string;
  itchio: string;

  constructor(private router: Router, private languageService : LanguageService) { }

  ngOnInit(): void {
    this.languageSubscription = this.languageService.languageSubject.subscribe(
      (language: number) =>{
        this.language = language;
        this.findAboutInfo();
      }
    );  

    this.languageService.emitLanguageSubjects();
  }

  findAboutInfo(): void {
    if(this.language === 0){
      this.texts = texts.fr.AboutMe;
    } else {
      this.texts = texts.en.AboutMe;
    }
    
    this.email = texts.global.email;
    this.linkedin = texts.global.linkedIn;
    this.itchio = texts.global.itchio;
  }

  ChargeTaatogPage(): void{
    this.router.navigate(['/Creations/TAATOG']);
  }
}
