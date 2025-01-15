import { Component, computed, inject, model, signal } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonService } from '../../services/pokemon/pokemon.service';
import { CommonModule } from '@angular/common';
import { PlayingCardComponent } from '../../components/playing-card/playing-card.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  imports: [CommonModule, PlayingCardComponent, SearchBarComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {
  private pokemonService = inject(PokemonService);
  private router = inject(Router);

  pokemons = signal<Pokemon[]>([]);
  search = model('');

  filteredPokemons = computed(() => {
    return this.pokemons().filter(pokemon => pokemon.name.includes(this.search()))
  })

  constructor() { 
    this.pokemons.set(this.pokemonService.getAll());
   }

   addPokemon() {
    const genericPokemon = new Pokemon();
    this.pokemonService.add(genericPokemon);
    this.pokemons.set(this.pokemonService.getAll());
    this.router.navigate(['pokemon']);
   }

   openPokemon(pokemon: Pokemon) {
    this.router.navigate(['pokemon', pokemon.id])
   }
}
