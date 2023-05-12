import { Injectable } from '@angular/core';
import { Card } from './card';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  url: string = 'http://localhost:3000/tasks';
  cards: Card[] = [];

  constructor() { }

  async getCards(): Promise<Card[]> {
    const response = await fetch(this.url);
    const cards = await response.json();
    return cards;
  }

  async getCardsByID(id: number): Promise<Card> {
    const response = await fetch(`${this.url}/${id}`);
    return await response.json();
  }

  async addOneCard(card: Card): Promise<void> {
    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(card),
    }

    const response = await fetch(this.url, settings);
  }

  async removeOneCard(id: number): Promise<void> {
    const settings = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    }

    const response = await fetch(`${this.url}/${id}`, settings);
  }
}
