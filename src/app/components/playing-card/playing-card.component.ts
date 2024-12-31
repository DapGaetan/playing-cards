import { Component, Input } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';

@Component({
  selector: 'app-playing-card',
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.scss'
})
export class PlayingCardComponent {


  @Input() pokemon: Pokemon = new Pokemon()
}
