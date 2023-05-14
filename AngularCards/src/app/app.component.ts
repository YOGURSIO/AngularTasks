import { Component } from '@angular/core';
import { Card } from './card';
import { PokeApiService } from './poke-api.service';
import { CardsService } from './cards.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cards: Array<Card> = [];

  constructor(private cardsService : CardsService){
    cardsService.getCards().then(cards => {this.cards = cards});
  }
}
