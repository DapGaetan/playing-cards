import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { Pokemon } from './models/pokemon.model';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PlayingCardComponent, SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  pokemon1!: Pokemon;
  count: number = 0;
  search = '';

  inscreaseCount(){
    this.count++;
  }

  constructor() {
    this.pokemon1 = new Pokemon();
    this.pokemon1.name = "Florizzare";
    this.pokemon1.hp = 150;
    this.pokemon1.figureCaption = "N°070 Florizzare";
    this.pokemon1.attackName = "Tempête Florale";
    this.pokemon1.attackStrength = 130;
    this.pokemon1.attackDescription = "Tempte Florale inflige des dégâts à tous les Pokémon présents sur le terrain adjacents au lanceur.";
  }
}
