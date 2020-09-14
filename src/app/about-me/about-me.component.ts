import { Component, OnInit } from '@angular/core';
import { GalleriaThumbnails } from 'primeng/galleria';
import creationsData from "src/data/game.json";


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  text: string[];
  email: string;
  linkedin: string;

  constructor() { }

  ngOnInit(): void {
    this.findAboutInfo();
    console.log(this.text);
  }

  findAboutInfo(): void {
    this.email = creationsData.about.email;
    this.linkedin = creationsData.about.linkedin;
    this.text = creationsData.about.text;
  }
}
