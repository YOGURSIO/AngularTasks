import { Component } from '@angular/core';
import { PokeApiService } from '../poke-api.service';
import { CardsService } from '../cards.service';
import { Card } from "../card";

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
    const newCard: Card = {
      imgURL: pkImage,
      pokemonName: this.pokemonName,
      taskDescription: this.taskDescription
    }
    this.cardsService.addOneCard(newCard);
    
  }

}
