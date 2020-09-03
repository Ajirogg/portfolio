import { Component, OnInit } from '@angular/core';
import { GameInfo } from 'src/Model/GameInfo';

@Component({
  selector: 'app-game-focus',
  templateUrl: './game-focus.component.html',
  styleUrls: ['./game-focus.component.scss']
})
export class GameFocusComponent implements OnInit {

  game: GameInfo;

  constructor() { }

  ngOnInit(): void {
    this.game = JSON.parse(localStorage.getItem("game"));
  }
}
