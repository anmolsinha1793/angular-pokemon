import { Routes } from '@angular/router';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: 'home', title:'Pokemon List', component: PokemonListComponent},
    {path: 'pokemon-details/:id', loadChildren: () => import('./modules/pokemon-details/pokemon-details.module').then((m) => m.PokemonDetailsModule)},
    {path: '**', title:'404 - Component not found', component: NotFoundComponent},
];
