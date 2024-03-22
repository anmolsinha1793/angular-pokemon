import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { IResultData } from '../interface/initialData.interface';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  pokemonList$ = new BehaviorSubject<IResultData[]>([]);
  pokemonList = this.pokemonList$.asObservable();
  constructor() { }

  getPokemonList(): Observable<IResultData[]> {
    return this.pokemonList;
  }

  setPokemonList(data: any) {
    this.pokemonList$.next(data);
  }
  handlePokemonListCreation(poke: any) {
    const pokemonListobj: any = {};
    pokemonListobj.name = poke.name;
    pokemonListobj.height = poke.height;
    pokemonListobj.weight = poke.weight;
    pokemonListobj.image = poke.sprites.other['official-artwork'].front_default;
    pokemonListobj.abilities = poke.abilities.reduce((acc: [], el: any) => acc.concat(el.ability.name) ,[]);
    pokemonListobj.moves = poke.moves.reduce((acc: [], el: any,i: number) => i<9 ? acc.concat(el.move.name) : acc ,[]);
    pokemonListobj.id = poke.id;
    return pokemonListobj;
  }

}
