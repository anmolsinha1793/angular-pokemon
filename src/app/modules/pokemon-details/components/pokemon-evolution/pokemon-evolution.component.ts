import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FetchPokemonService } from '../../../../services/fetch-pokemon.service';
import { Subject, switchMap, takeUntil } from 'rxjs';
import { IEvolutionChainData, ISpeciesData } from '../../../../interface/initialData.interface';
import { MaterialModule } from '../../../material/material.module';

@Component({
  selector: 'app-pokemon-evolution',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './pokemon-evolution.component.html',
  styleUrls: ['./pokemon-evolution.component.scss']
})
export class PokemonEvolutionComponent implements OnInit, OnDestroy {
  @Input() id!:number|string;
  evolutionChain:IEvolutionChainData[]|any = [];
  unSubscription$ = new Subject();
  isError:boolean = false;
  errorText:string = '';

  constructor(private fetchPokemonService: FetchPokemonService) {}
  ngOnInit(): void {
    this.getSpecies();
  }
  // made use of rxjs operators switchmap, take until
  getSpecies(): void {
    this.fetchPokemonService.getSpecies(this.id).pipe(switchMap((res: ISpeciesData) => this.fetchPokemonService.getEvolutionChain(res.evolution_chain.url)), takeUntil(this.unSubscription$)).subscribe(
      (res: IEvolutionChainData) => {
        this.isError = false;
        this.errorText = '';
      this.evolutionChain.push(res.chain.species.name);
      this.evolutionChain = [...this.evolutionChain, ...this.computeSpecies(res.chain.evolves_to)];
    }, (error) => {
      this.isError = true;
      this.errorText = error;
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
  ngOnDestroy(): void {
    this.unSubscription$.next(0);
    this.unSubscription$.complete();
  }
}
