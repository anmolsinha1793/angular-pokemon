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
    const obj: any = {};
    obj.name = poke.name;
    obj.height = poke.height;
    obj.weight = poke.weight;
    obj.image = poke.sprites.other['official-artwork'].front_default;
    obj.abilities = poke.abilities.reduce((acc: [], el: any) => acc.concat(el.ability.name) ,[]);
    obj.moves = poke.moves.reduce((acc: [], el: any,i: number) => i<9 ? acc.concat(el.move.name) : acc ,[]);
    obj.id = poke.id;
    return obj;
  }

}
