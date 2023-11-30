import { Component } from '@angular/core';
import { POKEMONS } from './mock-pokemon'
import Pokemon from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  pokemonsList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon|undefined;

  ngOnInit(){
    console.table(this.pokemonsList);
  }

  selectPokemon(idPokemon: string){
    const pokemon: Pokemon|undefined = this.pokemonsList.find(pokemon => pokemon.id == +idPokemon)
   if(pokemon){
    console.log(`Vous avez cliqué sur : ${pokemon.name}`);
   }else{
    console.log(`Pokemon introuvable`);
   }
   
  }
}
