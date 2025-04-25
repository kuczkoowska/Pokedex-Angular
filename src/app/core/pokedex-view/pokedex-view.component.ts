import {Component} from '@angular/core';
import {SearchBarComponent} from '@poke-ang/shared/search-bar/search-bar.component';
import {PokemonListComponent} from '@poke-ang/core/pokedex-view/components/pokemon-list/pokemon-list.component';
import {
  PokemonDetailsComponent
} from '@poke-ang/core/pokedex-view/components/pokemon-details/pokemon-details.component';

@Component({
  selector: 'app-pokedex-view',
  imports: [
    SearchBarComponent,
    PokemonListComponent,
    PokemonDetailsComponent
  ],
  templateUrl: './pokedex-view.component.html',
  styleUrl: './pokedex-view.component.scss'
})
export class PokedexViewComponent {

}
