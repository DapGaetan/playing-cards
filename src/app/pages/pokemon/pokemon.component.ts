import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemon',
  imports: [ReactiveFormsModule],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss'
})
export class PokemonComponent implements OnInit, OnDestroy{
  
  private route = inject(ActivatedRoute);
  private router = inject(Router)
  name = new FormControl('', [Validators.required])
  pokemonId = signal<number | undefined>(undefined)
  routeSubscription: Subscription | null = null;

  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe(params => {
      this.pokemonId.set(params['id'] ? parseInt(params['id']) : undefined);
    })
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
  }

  next() {
    var nextId = this.pokemonId() || 0;
    nextId++;
    this.router.navigate(['/pokemon/' + nextId])
  }

  submit(event: Event) {
    event.preventDefault();
    console.log(this.name.value);
  }
}
