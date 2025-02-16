import { Routes } from '@angular/router';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
},
{
    path: 'home', 
    component: PokemonListComponent,
},
{
    path: 'login', 
    component: LoginComponent,
},
{
    path: 'pokemon',
    children: [{
        path: '',
        component: PokemonComponent
    },
    {
        path: ':id',
        component: PokemonComponent
    }]
},
{
    path: '**',
    component: NotFoundComponent
}
];
