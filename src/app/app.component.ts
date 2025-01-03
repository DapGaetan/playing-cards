import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { Pokemon } from './models/pokemon.model';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { PokemonType } from './utils/pokemon.utils';

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

  selectedPokemonIndex = signal(1);
  selectedPokemon = computed(() => {
    return this.pokemons[this.selectedPokemonIndex()]
  })

  constructor() {


    effect(() => {
      console.log(this.selectedPokemon())
    })
    this.pokemons = []

    const pokemon1 = new Pokemon();
    pokemon1.name = "Florizzare";
    pokemon1.image = "pokemon/flo.jpg";
    pokemon1.type = PokemonType.PLANT;
    pokemon1.hp = 150;
    pokemon1.figureCaption = "N°070 Florizzare";
    pokemon1.attackName = "Tempête Florale";
    pokemon1.attackStrength = 130;
    pokemon1.attackDescription = "Tempte Florale inflige des dégâts à tous les Pokémon présents sur le terrain adjacents au lanceur.";

    const pokemon2 = new Pokemon();
    pokemon2.name = "Léviator";
    pokemon2.image = "pokemon/leviator.jpg";
    pokemon2.type = PokemonType.WATER;
    pokemon2.hp = 90;
    pokemon2.figureCaption = "N°0130 Léviator";
    pokemon2.attackName = "Siphon";
    pokemon2.attackStrength = 35;
    pokemon2.attackDescription = "Siphon permet de traverser les tourbillons barrant le passage.";

    this.pokemons.push(pokemon1);
    this.pokemons.push(pokemon2);
  }

  inscreaseCount(){
    this.count++;
  }

  togglePokemon(){
    this.selectedPokemonIndex.set((this.selectedPokemonIndex() + 1) % this.pokemons.length);
  }
}
