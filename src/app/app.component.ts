import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from 'src/Services/language.service';
import { Subscription } from 'rxjs';

import texts from "src/data/texts.json"
import { Categories } from 'src/Model/Categories';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'PortfolioWeb';
  exeDispo : boolean = true;

  texts: Categories;

  language : number;
  languageSubscription: Subscription;

  flag : string;
  langAbbreviate : string;

  constructor(private router: Router, private languageService : LanguageService) { }

  ngOnInit(): void {
    this.languageSubscription = this.languageService.languageSubject.subscribe(
      (lang: number) =>{
        
        this.language = lang;
        if(this.language == 0){
          this.flag = "assets/Images/gb-flag.svg";
          this.langAbbreviate = " En";
          this.texts = texts.fr.Categories;
        } else {
          this.flag = "assets/Images/fr-flag.svg";
          this.langAbbreviate = " Fr";        
          this.texts = texts.en.Categories;
        }
      }
    ); 

    this.languageService.emitLanguageSubjects();     
  }

  changeMainPage(page: string): void {
    this.router.navigate(['/' + page]);
  }

  changeLanguage(){
    this.languageService.changeLanguage();
  }
}
