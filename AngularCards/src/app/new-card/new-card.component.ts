import { Component, inject } from '@angular/core';
import { PokeApiService } from '../poke-api.service';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.css'],
  providers: [
    PokeApiService,
  ]
})
export class NewCardComponent {
  pokeApiService = inject(PokeApiService);
  pokemonName: string = '';
  taskDescription: string = '';

  //Adds a card to the list of cards with the image of the pokemon, name of the pokemon, and the task description
  async onAddCard() {
    const pkImage = await this.pokeApiService.getPokemonImgByName(this.pokemonName);
    console.log(pkImage);
    console.log('Added a card!');
    console.log(this.pokemonName);
    console.log(this.taskDescription);
  }

}
