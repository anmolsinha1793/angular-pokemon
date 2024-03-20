import { Component, Input, OnInit } from '@angular/core';
import { FetchPokemonService } from '../../../../services/fetch-pokemon.service';
import { Subject, switchMap, takeUntil } from 'rxjs';
import {MatCardModule} from '@angular/material/card';
import { IEvolutionChainData, ISpeciesData } from '../../../../interface/initialData.interface';

@Component({
  selector: 'app-pokemon-evolution',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './pokemon-evolution.component.html',
  styleUrl: './pokemon-evolution.component.scss'
})
export class PokemonEvolutionComponent implements OnInit {
  @Input() id!:number|string;
  evolutionChain:IEvolutionChainData[]|any = [];
  unSubscription$ = new Subject();
  constructor(private fetchPokemonService: FetchPokemonService) {}
  ngOnInit() {
    this.getSpecies();
  }
  getSpecies() {
    this.fetchPokemonService.getSpecies(this.id).pipe(switchMap((res: ISpeciesData) => this.fetchPokemonService.getEvolutionChain(res.evolution_chain.url)), takeUntil(this.unSubscription$)).subscribe((res: IEvolutionChainData) => {
      this.evolutionChain.push(res.chain.species.name);
      this.evolutionChain = [...this.evolutionChain, ...this.computeSpecies(res.chain.evolves_to)];
    })
  }
  computeSpecies(data:IEvolutionChainData[]|any): string[] {
    let res = [];
    const calculated = data[0];
    if(calculated?.species?.name) {
      res.push(calculated.species.name);
    }
    if(calculated?.hasOwnProperty('evolves_to')) {
      res = [...res, ...this.computeSpecies(calculated.evolves_to)];
    }
    return res;
  }
  ngOnDestroy() {
    this.unSubscription$.next(0);
    this.unSubscription$.complete();
  }
}
