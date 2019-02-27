import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; //導入 Hero 類
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  //hero = 'Windstorm'; // hero 屬性
  /*selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }*/
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }

}
