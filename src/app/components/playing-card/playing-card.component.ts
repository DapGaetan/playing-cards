import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-playing-card',
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.scss'
})
export class PlayingCardComponent {


  @Input()name: string = "Elektor";
  @Input()hp: number = 140;
  @Input()figureCaption: string = "N°0145 Elektor"
  @Input()attackName: string = "Cage Éclar"
  @Input()attackStrength: number = 60;
  @Input()attackDescription: string = "Cage Éclair paralyse la cible, Capacité Dynamax, Cage Éclair devient Gardomax."
}
