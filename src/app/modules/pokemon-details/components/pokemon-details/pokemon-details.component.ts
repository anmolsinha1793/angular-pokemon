import { Component, OnDestroy, OnInit } from '@angular/core';

import { PokemonSummaryComponent } from '../pokemon-summary/pokemon-summary.component';
import { PokemonEvolutionComponent } from '../pokemon-evolution/pokemon-evolution.component';
import { ActivatedRoute } from '@angular/router';
import { UtilsService } from '../../../../services/utils.service';
import { Subject, switchMap, takeUntil } from 'rxjs';
import { FetchPokemonService } from '../../../../services/fetch-pokemon.service';
import { IResultData } from '../../../../interface/initialData.interface';
import { MaterialModule } from '../../../material/material.module';

@Component({
  selector: 'app-pokemon-details',
  standalone: true,
  imports: [MaterialModule, PokemonSummaryComponent, PokemonEvolutionComponent],
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit, OnDestroy{
  constructor(private aroute: ActivatedRoute, private utilService: UtilsService, private fetchPokemonService: FetchPokemonService) {}
  id!:string;
  pokemonData!:IResultData;
  unSubscription$ = new Subject();
  isError:boolean = false;
  errorText:string = '';
  
  ngOnInit(): void {
    this.handleGetPokemonList();
  }
  // made use of switchmap and takeuntil from rxjs to prevent nesting
  handleGetPokemonList(): void {
    this.aroute.paramMap.pipe((switchMap((params) => {
      this.id = params.get('id') ?? '';
      const pokeMonData = this.utilService.pokemonList$.getValue();
      return pokeMonData.length ? this.utilService.getPokemonList() : this.fetchPokemonService.fetchRequiredPokemon(this.id);
    })), takeUntil(this.unSubscription$)).subscribe({
      next: (data: IResultData[]) => {
        this.errorText = '';
        this.isError = false;
        let computed = [];
        if (this.utilService.pokemonList$.getValue().length === 0) {
          computed.push(this.utilService.handlePokemonListCreation(data));
        } else {
          computed = data;
        }
        this.pokemonData = computed.find((el: IResultData) => +el.id === +this.id);
      },
      error: (error) => {
        this.isError = true;
        this.errorText = error;
      }
    }
    );
  }

  ngOnDestroy(): void {
    this.unSubscription$.next(0);
    this.unSubscription$.complete();
  }
}
