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
  pokemons!: Pokemon[];
  count: number = 0;
  search = '';

  selectedPokemonIndex = 0;

  constructor() {

    this.pokemons = []

    const pokemon1 = new Pokemon();
    pokemon1.name = "Florizzare";
    pokemon1.hp = 150;
    pokemon1.figureCaption = "N°070 Florizzare";
    pokemon1.attackName = "Tempête Florale";
    pokemon1.attackStrength = 130;
    pokemon1.attackDescription = "Tempte Florale inflige des dégâts à tous les Pokémon présents sur le terrain adjacents au lanceur.";

    const pokemon2 = new Pokemon();
    pokemon2.name = "Elektor";
    pokemon2.hp = 140;
    pokemon2.figureCaption = "N°0145 Elektor";
    pokemon2.attackName = "Cage Éclar";
    pokemon2.attackStrength = 60;
    pokemon2.attackDescription = "Cage Éclair paralyse la cible, Capacité Dynamax, Cage Éclair devient Gardomax.";

    this.pokemons.push(pokemon1);
    this.pokemons.push(pokemon2);
  }

  inscreaseCount(){
    this.count++;
  }

  togglePokemon(){
    this.selectedPokemonIndex = (this.selectedPokemonIndex + 1) % this.pokemons.length;
  }
}
