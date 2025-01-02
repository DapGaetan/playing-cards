import { Component, input, Input, InputSignal } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';

@Component({
  selector: 'app-playing-card',
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.scss'
})
export class PlayingCardComponent {
  @Input() pokemon = new Pokemon();

  PokemonTypeIcon: string = "energy/elec.png";
  backgroundColor: string = "rgb(255,255,104)";
}
