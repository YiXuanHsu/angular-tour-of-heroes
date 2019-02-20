import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; //導入 Hero 類
import { HEROES } from '../mock-heroes'; //導入 HEROES 類

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  //hero = 'Windstorm'; // hero 屬性
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  heroes = HEROES;
  constructor() { }

  ngOnInit() {
  }

}
