import { Component, Input } from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';
import {MatDividerModule} from '@angular/material/divider';
import { IResultData } from '../../../../interface/initialData.interface';

@Component({
  selector: 'app-pokemon-summary',
  standalone: true,
  imports: [MatChipsModule, MatDividerModule],
  templateUrl: './pokemon-summary.component.html',
  styleUrl: './pokemon-summary.component.scss'
})
export class PokemonSummaryComponent {
  @Input() pokemonData!: IResultData;
}
