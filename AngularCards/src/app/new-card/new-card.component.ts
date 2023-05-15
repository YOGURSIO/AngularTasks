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
  backImage: string= '';

  constructor(private cardsService: CardsService, private pokeApiService: PokeApiService) {}

  //Adds a card to the list of cards with the image of the pokemon, name of the pokemon, and the task description
  async onAddCard() {
    try {
      const pokemon = await this.pokeApiService.getPokemonImgByName(this.pokemonName);

      const newCard: Card = {
        imgURL: pokemon.sprites.frontImgUrl,
        imgURLback: pokemon.sprites.backImgUrl,
        pokemonName: this.pokemonName,
        taskDescription: this.taskDescription,
      }

      this.cardsService.addOneCard(newCard);
      location.reload();
    } catch (error) {
      alert(`Pokemon "${this.pokemonName}" not found!`);
    } finally {
      this.clearInputs();
    }
  }
  
  clearInputs() {
    this.pokemonName = '';
    this.taskDescription = '';
  }
}
