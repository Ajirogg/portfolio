import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import creationsData from "src/data/game.json";
import { GameInfo } from "src/Model/GameInfo";

@Component({
  selector: 'app-creations',
  templateUrl: './creations.component.html',
  styleUrls: ['./creations.component.scss']
})
export class CreationsComponent implements OnInit {

  nbCreations: number;
  games: GameInfo[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.createArrayCreations();
  }

  createArrayCreations(): void {
    let maxOrder = creationsData.games.length;

    while (maxOrder !== 0) {
      this.games.push(creationsData.games.find(game => game.order === maxOrder));
      maxOrder--;
    }
  }

  loadPage(game: GameInfo): void {
    localStorage.setItem('game', JSON.stringify(game));
    this.router.navigate(['/Creations', game.title]);
  }
}  
