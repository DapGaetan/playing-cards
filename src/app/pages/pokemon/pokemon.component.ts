import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PokemonType } from '../../utils/pokemon.utils';
import { PlayingCardComponent } from '../../components/playing-card/playing-card.component';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonService } from '../../services/pokemon/pokemon.service';
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'

@Component({
  selector: 'app-pokemon',
  imports: [ReactiveFormsModule, PlayingCardComponent, MatButtonModule, MatInputModule],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss'
})

export class PokemonComponent implements OnInit, OnDestroy{
  
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private fb = inject(FormBuilder);
  private pokemonService = inject(PokemonService);
  private routeSubscription: Subscription | null = null;
  private formValuesSubscription:Subscription | null = null;
  
  formGroup = this.fb.group({
    name: ['', Validators.required],
    image: ['', Validators.required],
    type: [PokemonType.ELECTRIC, Validators.required],
    hp: [0, [Validators.required, Validators.min(1), Validators.max(200)]],
    figureCaption: ['', Validators.required],
    attackName: ['', Validators.required],
    attackStrength: [0, [Validators.required, Validators.min(1), Validators.max(200)]],
    attackDescription: ['', Validators.required],
  });

  pokemon: Pokemon = Object.assign(new Pokemon(), this.formGroup.value);
  pokemonTypes = Object.values(PokemonType);
  pokemonId = -1;

  ngOnInit(): void {
    this.formValuesSubscription = this.formGroup.valueChanges.subscribe(data => {
      this.pokemon = Object.assign(new Pokemon(), data);
    });
    this.routeSubscription = this.route.params.subscribe(params => {
      if (params['id']) {
        this.pokemonId = parseInt(params['id']);
        const pokemonFound = this.pokemonService.get(this.pokemonId);
        if (pokemonFound) {
          this.pokemon = pokemonFound;
          this.formGroup.patchValue(this.pokemon)
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.formValuesSubscription?.unsubscribe();
    this.routeSubscription?.unsubscribe();
  }

  submit(event: Event) {
    event.preventDefault();
    if (this.pokemonId === -1) {
      this.pokemonService.add(this.pokemon);
    } else {
      this.pokemon.id = this.pokemonId;
      this.pokemonService.update(this.pokemon);
    }
    this.navigateBack();
  }

  navigateBack() {
    this.router.navigate(['/home'])
  }

  isFieldValid(name: string) {
    const formControl = this.formGroup.get(name);
    return formControl?.invalid && (formControl?.dirty || formControl?.touched)

  }

  onFileChange(event: any) {
    const reader = new FileReader();
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.formGroup.patchValue({
          image: reader.result as string
        })
      };
    }
  }
}
