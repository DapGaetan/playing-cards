import { Component, input, Input, InputSignal, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonTypeProperties } from '../../utils/pokemon.utils';

@Component({
  selector: 'app-playing-card',
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.scss'
})
export class PlayingCardComponent implements OnChanges{

  @Input() pokemon = new Pokemon();

  pokemonTypeIcon: string = "energy/elec.png";
  backgroundColor: string = "rgb(255,255,104)";

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pokemon']) {
      if (changes['pokemon'].previousValue?.type != changes['pokemon'].currentValue.type) {
        this.pokemonTypeIcon = PokemonTypeProperties[this.pokemon.type].imageUrl;
        this.backgroundColor = PokemonTypeProperties[this.pokemon.type].color;
      }
    }
  }
}
