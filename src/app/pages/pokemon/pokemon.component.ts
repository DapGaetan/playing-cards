import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  imports: [],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss'
})
export class PokemonComponent implements OnInit{
  private route = inject(ActivatedRoute);
  private router = inject(Router)
  
  pokemonId = signal<number | undefined>(undefined)

  ngOnInit(): void {
    const params = this.route.snapshot.params

    this.pokemonId.set(params['id'] ? parseInt(params['id']) : undefined)
  }

  next() {
    var nextId = this.pokemonId() || 0;
    nextId++;
    this.router.navigate(['/pokemon/' + nextId])
  }
}
