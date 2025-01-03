import { Component, input, Input, InputSignal, OnChanges, OnInit, SimpleChanges, computed } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonTypeProperties } from '../../utils/pokemon.utils';

@Component({
  selector: 'app-playing-card',
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.scss'
})
export class PlayingCardComponent{

 pokemon = input(new Pokemon());

  pokemonTypeIcon = computed(() => {
    return PokemonTypeProperties[this.pokemon().type].imageUrl;
  });

  backgroundColor = computed(() => {
    return PokemonTypeProperties[this.pokemon().type].color;
  });
}
