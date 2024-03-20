import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import { PokemonSummaryComponent } from '../pokemon-summary/pokemon-summary.component';
import { PokemonEvolutionComponent } from '../pokemon-evolution/pokemon-evolution.component';
import { ActivatedRoute } from '@angular/router';
import { UtilsService } from '../../../../services/utils.service';
import { Subject, switchMap, takeUntil } from 'rxjs';
import { FetchPokemonService } from '../../../../services/fetch-pokemon.service';
import { IResultData } from '../../../../interface/initialData.interface';

@Component({
  selector: 'app-pokemon-details',
  standalone: true,
  imports: [MatTabsModule, MatIconModule, PokemonSummaryComponent, PokemonEvolutionComponent],
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.scss'
})
export class PokemonDetailsComponent {
  constructor(private aroute: ActivatedRoute, private utilService: UtilsService, private fetchPokemonService: FetchPokemonService) {}
  id!:string;
  pokemonData!:IResultData;
  unSubscription$ = new Subject();
  
  ngOnInit() {
    this.aroute.paramMap.pipe((switchMap((params) => {
      this.id = params.get('id') ?? '';
      const pokeMonData = this.utilService.pokemonList$.getValue();
      return pokeMonData.length ? this.utilService.getPokemonList() : this.fetchPokemonService.fetchRequiredPokemon(this.id) ;
    })), takeUntil(this.unSubscription$)).subscribe({
      next: (data: IResultData[]) => {
        let computed = [];
        if(this.utilService.pokemonList$.getValue().length === 0) {
          computed.push(this.utilService.handlePokemonListCreation(data));
        } else {
          computed = data;
        }
        this.pokemonData = computed.find((el:IResultData) => +el.id === +this.id);
      }
    })
  }
  ngOnDestroy() {
    this.unSubscription$.next(0);
    this.unSubscription$.complete();
  }
}
