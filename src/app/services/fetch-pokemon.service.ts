import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {apiList} from '../constants/api-url.constant';
import { Observable } from 'rxjs';
import { IEvolutionChainData, IInitialData, IResultData, ISpeciesData } from '../interface/initialData.interface';

@Injectable({
  providedIn: 'root'
})
export class FetchPokemonService {

  constructor(private http: HttpClient) { }

  fetchAllPokemons(): Observable<IInitialData> {
    return this.http.get<IInitialData>(apiList.fetchAllPokemons);
  }
  fetchRequiredPokemon(id: string):Observable<IResultData[]> {
    return this.http.get<IResultData[]>(`${apiList.fetchAllPokemons}${id}`);
  }
  makeNextPageCalls(offset: number): Observable<IInitialData> {
    return this.http.get<IInitialData>(`${apiList.fetchAllPokemons}?offset=${offset}&limit=20'`);
  }
  getPokemonDetails(url: string): Observable<IResultData> {
    return this.http.get<IResultData>(url);
  }
  getSpecies(id: any):Observable<ISpeciesData> {
    return this.http.get<ISpeciesData>(`${apiList.species}${id}/`);
  }
  getEvolutionChain(url: string): Observable<IEvolutionChainData> {
    return this.http.get<IEvolutionChainData>(url);
  }
}
