import { Component, OnDestroy, OnInit } from '@angular/core';
import { FetchPokemonService } from '../../services/fetch-pokemon.service';
import { UtilsService } from '../../services/utils.service';
import { PageEvent } from '@angular/material/paginator';
import { Observable, Subject, concatMap, forkJoin, of, takeUntil, tap } from 'rxjs';
import { Router } from '@angular/router';
import { IInitialData, IResultData } from '../../interface/initialData.interface';
import { MaterialModule } from '../../modules/material/material.module';
import { AppConstants } from '../../constants/app.constant';


@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit, OnDestroy {
totalItems = AppConstants.totalItems;
pageSize = AppConstants.pageSize;
currentPage = AppConstants.currentPage;
pokemonData:any = [];
isContentLoaded:boolean = false;
isInitialLoad:boolean = true;
unSubscription$ = new Subject();
isError:boolean = false;
errorText:string = '';

  constructor(private fetchPokemonService: FetchPokemonService, private utilsService: UtilsService, private router: Router) {}

  ngOnInit(): void {
    this.fetchPokemonList();
    this.isInitialLoad = false;
  }
  // made use of rxjs operator concatmap to avoid nesting of subscriptions
  fetchPokemonList(): void {
    const offset = (this.currentPage)*AppConstants.technicalAdjustment;
    this.isContentLoaded = false;
    const selectedApi = this.isInitialLoad ? this.fetchPokemonService.fetchAllPokemons() : this.fetchPokemonService.makeNextPageCalls(offset);
    selectedApi.pipe(tap((res) => {this.totalItems = res.count;}),concatMap((res: IInitialData) => {
      return this.handlePokemonListCreation(res);
    }),takeUntil(this.unSubscription$)).subscribe({
      next: (data: IResultData[]|any) => {
        data?.forEach((poke: IResultData) => {
          this.pokemonData.push(this.utilsService.handlePokemonListCreation(poke));
          // storing values into behavior subject so that those can be accessed later
          this.utilsService.setPokemonList(this.pokemonData);
        })
        this.isError = false;
        this.errorText = '';
      },
      error: (error) => {
        this.isError = true;
        this.errorText = error;
      }
    })
  }

  handlePokemonListCreation(res: IInitialData): Observable<IInitialData|IResultData[]> {
    const apis = res.results.map((el: { name: string; url: string; }) => this.fetchPokemonService.getPokemonDetails(el.url));
    this.isContentLoaded = true;
    return forkJoin(apis);
  }

  navigate(id: number): void {
    this.router.navigate([`pokemon-details/${id}`]);
  }
  pageChanged(event: PageEvent): void {
    this.currentPage = event.pageIndex;
    this.pokemonData = [];
    this.utilsService.setPokemonList([]);
    this.fetchPokemonList();
  }
  ngOnDestroy(): void {
    this.unSubscription$.next(0);
    this.unSubscription$.complete();
  }
}
