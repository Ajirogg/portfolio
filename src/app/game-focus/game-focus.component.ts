import { Component, OnInit } from '@angular/core';
import { GameInfo } from 'src/Model/GameInfo';

import { ActivatedRoute } from '@angular/router';

import creationsData from "src/data/game.json";

@Component({
  selector: 'app-game-focus',
  templateUrl: './game-focus.component.html',
  styleUrls: ['./game-focus.component.scss']
})
export class GameFocusComponent implements OnInit {

  game: GameInfo;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    for (const game of creationsData.games) {
      if(game.title === this.route.params['value'].title){
        this.game = game;
        break;
      }
    }
  }
}
