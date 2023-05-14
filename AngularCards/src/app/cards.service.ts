import { Injectable } from '@angular/core';
import { Card } from './card';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  url: string = 'http://localhost:3000/tasks';

  constructor() { }

  async getCards(): Promise<Card[]> {
    const response = await fetch(this.url);
    return await response.json();
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

    await fetch(this.url, settings);
  }

  async editCard(card: Card): Promise<void> {
    const settings = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(card),
    }

    await fetch(`${this.url}/${card.id}`, settings);
  }

  async removeOneCard(id: number): Promise<void> {
    const settings = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    }

    await fetch(`${this.url}/${id}`, settings);
  }
}
