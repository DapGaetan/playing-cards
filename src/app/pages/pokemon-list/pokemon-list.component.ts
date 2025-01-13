import { Component, computed, inject, model, signal } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonService } from '../../services/pokemon/pokemon.service';
import { CommonModule } from '@angular/common';
import { PlayingCardComponent } from '../../components/playing-card/playing-card.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';

@Component({
  selector: 'app-pokemon-list',
  imports: [CommonModule, PlayingCardComponent, SearchBarComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {
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
