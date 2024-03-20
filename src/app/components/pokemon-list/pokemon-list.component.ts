import { Component, OnInit } from '@angular/core';
import { FetchPokemonService } from '../../services/fetch-pokemon.service';
import { UtilsService } from '../../services/utils.service';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { Subject, concatMap, of, takeUntil } from 'rxjs';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { IInitialData, IResultData } from '../../interface/initialData.interface';


@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [MatPaginatorModule, MatCardModule, MatButtonModule, CommonModule, MatProgressSpinnerModule],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent implements OnInit {
totalItems = 100;
pageSize = 20;
currentPage = 0;
pokemonData:any = [];
isContentLoaded = false;
isInitialLoad = true;
unSubscription$ = new Subject();

  constructor(private fetchPokemonService: FetchPokemonService, private utilsService: UtilsService, private router: Router) {}

  ngOnInit() {
    this.fetchPokemonList();
    this.isInitialLoad = false;
  }
  fetchPokemonList() {
    const offset = (this.currentPage)*20
    this.isContentLoaded = false;
    const ref = this.isInitialLoad ? this.fetchPokemonService.fetchAllPokemons() : this.fetchPokemonService.makeNextPageCalls(offset);
    ref.pipe(concatMap((res: IInitialData) => {
      res.results.forEach((el: {name: string, url: string}) => {
        this.fetchPokemonService.getPokemonDetails(el.url).subscribe({
          next: (poke: IResultData) => {
            this.pokemonData.push(this.utilsService.handlePokemonListCreation(poke));
          }
        });
      });
      this.isContentLoaded = true;
      this.utilsService.setPokemonList(this.pokemonData);
      return of(res);
    }),takeUntil(this.unSubscription$)).subscribe({
      next: (data: IInitialData) => {
        this.totalItems = data.count;
      }
    })
  }

  navigate(id: number) {
    this.router.navigate([`pokemon-details/${id}`]);
  }
  pageChanged(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pokemonData = [];
    this.utilsService.setPokemonList([]);
    this.fetchPokemonList();
  }
  ngOnDestroy() {
    this.unSubscription$.next(0);
    this.unSubscription$.complete();
  }
}
