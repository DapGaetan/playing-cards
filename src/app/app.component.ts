import { PokemonService } from './services/pokemon/pokemon.service';
import { Component, computed, inject, model, signal } from '@angular/core';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { Pokemon } from './models/pokemon.model';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, PlayingCardComponent, SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  PokemonService = inject(PokemonService);

  pokemons = signal<Pokemon[]>([]);
  search = model('');

  filteredPokemons = computed(() => {
    return this.pokemons().filter(pokemon => pokemon.name.includes(this.search()))
  })

  constructor() { 
    this.pokemons.set(this.PokemonService.getAll());
   }

   addPokemon() {
    const genericPokemon = new Pokemon();
    this.PokemonService.add(genericPokemon);
    this.pokemons.set(this.PokemonService.getAll());
   }
}
