import { Component } from '@angular/core';
import { PokeApiService } from '../poke-api.service';
import { Card } from '../card';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.css'],
  providers: [
    PokeApiService,
  ]
})
export class NewCardComponent {
  pokemonName: string = '';
  taskDescription: string = '';

  constructor(private cardsService: CardsService, private pokeApiService: PokeApiService) {}

  //Adds a card to the list of cards with the image of the pokemon, name of the pokemon, and the task description
  async onAddCard() {
    let pkImage = '';
    try {
      pkImage = await this.pokeApiService.getPokemonImgByName(this.pokemonName);
    } catch (error) {
      alert(`Pokemon "${this.pokemonName}" not found!`);
    } finally {
      this.pokemonName = '';
      this.taskDescription = '';
    }
    const newCard: Card = {
      imgURL: pkImage,
      pokemonName: this.pokemonName,
      taskDescription: this.taskDescription
    }
    this.cardsService.addOneCard(newCard);
    location.reload();
  }

}
