import { Component } from '@angular/core';
import { PokeApiService } from '../poke-api.service';
import { Card } from '../card';
import { Input } from '@angular/core';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-general-card',
  template: `
    <section class="generalCard">
      <img class="pkImage" [src]="this.card.imgURL" alt="Pokemon image">
      <h2 class="pokemonName">{{this.card.pokemonName}}</h2>
      <p class="taskDescription">{{this.card.taskDescription}}</p>
      <button (click)="edit = !edit">Edit</button>
      <button (click)="delete()">Delete Card</button>
      <div *ngIf="edit">
        <input type="text" [(ngModel)]="newTaskDescription">
        <button (click)="save()">Save</button>
      </div>
    </section>
  `,
  styleUrls: ['./general-card.component.css'],
  providers: [
    PokeApiService,
  ]
})
export class GeneralCardComponent {
  newTaskDescription: string = "";
  @Input() card!: Card;
  edit: boolean = false;

  constructor(private cardsService: CardsService) {
  }

  async save() {
    this.card.taskDescription = this.newTaskDescription;
    this.edit = false
    this.cardsService.editCard(this.card);
  }

  async delete() {
    await this.cardsService.removeOneCard(this.card.id!);
    location.reload();
  }

}
