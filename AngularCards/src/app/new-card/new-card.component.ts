import { Component, inject } from '@angular/core';
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
    const pkImage = await this.pokeApiService.getPokemonImgByName(this.pokemonName);
    pkImage.then((imgUrl: string) => {
      const newCard: Card = {
        imgURL: imgUrl,
        pokemonName: this.pokemonName,
        taskDescription: this.taskDescription
      }
      this.cardsService.addOneCard(newCard);
    })
  }

}
