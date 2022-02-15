import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { LanguageService } from "src/Services/language.service";
import { Subscription } from 'rxjs';

import texts from "src/data/texts.json"

import { GameInfo } from "src/Model/GameInfo";

@Component({
  selector: 'app-creations',
  templateUrl: './creations.component.html',
  styleUrls: ['./creations.component.scss']
})
export class CreationsComponent implements OnInit {

  
  language : number;
  languageSubscription: Subscription;

  nbCreations: number;
  games: GameInfo[] = [];

  constructor(private router: Router, private languageService : LanguageService) { }

  ngOnInit(): void {
   this.languageSubscription = this.languageService.languageSubject.subscribe(
      (language: number) =>{
        this.language = language;
        this.createArrayCreations(this.language);
      }
      );  

    this.languageService.emitLanguageSubjects();
  
  }

  createArrayCreations(Language: number): void {
    let gamesDef: any[] = [];
    
    if(Language === 0){
      gamesDef = texts.fr.Creations;    
    } else {
      gamesDef = texts.en.Creations;
    }

    let maxOrder = gamesDef.length;
    
    this.games = [];

    while (maxOrder !== 0) {
      this.games.push(gamesDef.find(game => game.order === maxOrder));
      maxOrder--;
    }

    this.games.forEach(game => {
        game.keyWordSplit = game.keyWords.split(",");
    });
  }

  // charge game focus page
  loadPage(game: GameInfo): void {
    this.router.navigate(['/Creations', game.PageName]);
  }
}  
