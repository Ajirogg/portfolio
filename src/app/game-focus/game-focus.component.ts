import { Component, OnInit } from '@angular/core';
import { GameInfo } from 'src/Model/GameInfo';

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import creationsData from "src/data/game.json";

@Component({
  selector: 'app-game-focus',
  templateUrl: './game-focus.component.html',
  styleUrls: ['./game-focus.component.scss']
})
export class GameFocusComponent implements OnInit {

  game: GameInfo;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let find = false;

    for (const game of creationsData.games) {
      if(game.title === this.activatedRoute.params['value'].title){
        this.game = game;
        find = true;
        break;
      }
    }

    if(!find){
      this.router.navigate(['/Creations']);
    }
  }
}
