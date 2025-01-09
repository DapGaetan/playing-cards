import { PokemonType } from '../../utils/pokemon.utils';
import { Pokemon } from './../../models/pokemon.model';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemons: Pokemon[] = [];
  currentIndex: number = 1

  constructor() { 
    this.pokemons = []

    const pokemon1 = new Pokemon();
    pokemon1.name = "Florizzare";
    pokemon1.image = "pokemon/flo.jpg";
    pokemon1.type = PokemonType.PLANT;
    pokemon1.hp = 150;
    pokemon1.figureCaption = "N°0070 Florizzare";
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

    const pokemon3 = new Pokemon();
    pokemon3.name = "Raichu";
    pokemon3.image = "pokemon/raichu.jpg";
    pokemon3.type = PokemonType.ELECTRIC;
    pokemon3.hp = 80;
    pokemon3.figureCaption = "N°0026 Raichu";
    pokemon3.attackName = "Éclair";
    pokemon3.attackStrength = 55;
    pokemon3.attackDescription = "Éclair inflige des dégâts et a 10% de chances de paralyser la cible.";

    const pokemon4 = new Pokemon();
    pokemon4.name = "Dracofeu";
    pokemon4.image = "pokemon/dracofeu.jpg";
    pokemon4.type = PokemonType.FIRE;
    pokemon4.hp = 150;
    pokemon4.figureCaption = "N°0006 Dracofeu";
    pokemon4.attackName = "Canicule";
    pokemon4.attackStrength = 95;
    pokemon4.attackDescription = "Canicule a 10% de chances de brûler la cible (si elle n'est pas déjà atteinte par un changement de statut).";

    this.pokemons.push(pokemon1);
    this.pokemons.push(pokemon2);
    this.pokemons.push(pokemon3);
    this.pokemons.push(pokemon4);
  }

  getAll(): Pokemon[] {
    return this.pokemons.map(pokemon => pokemon.copy());
  }

  get(id: number): Pokemon | undefined{
    const pokemon = this.pokemons.find(pokemon => pokemon.id === id);
    return pokemon ? pokemon.copy() : undefined;
  }

  add(pokemon: Pokemon): Pokemon {
    const pokemonCopy = pokemon.copy();

    pokemonCopy.id = this.currentIndex;
    this.pokemons.push(pokemonCopy.copy())
    this.currentIndex++;
  
    return pokemonCopy;

  }

  update(pokemon: Pokemon): Pokemon {
    const pokemonCopy = pokemon.copy();

    const pokemonIndex = this.pokemons.findIndex(originalPokemon => originalPokemon.id === pokemon.id);
    if (pokemonIndex) {
      this.pokemons[pokemonIndex] = pokemonCopy.copy();
    }

    return pokemonCopy;
  }

  delete(id:number) {
    const pokemonIndex = this.pokemons.findIndex(originalPokemon => originalPokemon.id === id);
    if(pokemonIndex != -1){
      this.pokemons.splice(pokemonIndex, 1);
    }
  }


}
