import { Component, OnInit } from '@angular/core';
import { GameInfo } from 'src/Model/GameInfo';
import { Focus } from 'src/Model/Focus';

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { LanguageService } from "src/Services/language.service";
import { Subscription } from 'rxjs';

import texts from "src/data/texts.json"

@Component({
  selector: 'app-game-focus',
  templateUrl: './game-focus.component.html',
  styleUrls: ['./game-focus.component.scss']
})
export class GameFocusComponent implements OnInit {

  
  language : number;
  languageSubscription: Subscription;

  game: GameInfo;
  focus: Focus;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private languageService : LanguageService) { }

  ngOnInit() {
    this.languageSubscription = this.languageService.languageSubject.subscribe(
      (language: number) =>{
        this.language = language;

        let creations : any[] = [] 
        if(this.language === 0){
          creations = texts.fr.Creations;   
          this.focus = texts.fr.GameFocus; 
        } else {
          creations = texts.en.Creations;
          this.focus = texts.en.GameFocus; 
        }

        let find = false;

        for (const game of creations) {
          if(game.PageName === this.activatedRoute.params['value'].title){
            this.game = game;
            find = true;
            break;
          }
        }
    
        if(!find){
          this.router.navigate(['/Creations']);
        }     
       });  

    this.languageService.emitLanguageSubjects();  
  }
}
