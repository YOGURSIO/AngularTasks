import { Component } from '@angular/core';
import { PokeApiService } from '../poke-api.service';
import { NewCardComponent } from '../new-card/new-card.component';
import { Card } from '../card';
import { Input } from '@angular/core';
import { CardsService } from '../cards.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-general-card',
  template: `
  <section class="generalCard">
    <img class="pkImage" [src]="this.card.imgURL">
    <h2 class ="pokemonName" >{{this.card.pokemonName}}</h2>
    <p class ="taskDescription" >{{this.card.taskDescription}}</p>
    <button (click) = "edit = !edit">Edit</button>
    <button (click)="delete()">Delete Card</button>
    <div *ngIf="edit">
    <input type="text" [(ngModel)]="newTaskDescription">
    <button (click)="save()" [disabled]="newTaskDescription === ''">Save</button>

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
  constructor(private cardsService: CardsService, private location: Location) {}
  
  @Input() card!: Card;
  edit: boolean = false;

  // Save the new description 
 async save()
  {
    this.card.taskDescription = this.newTaskDescription;
  }
  // When delete the card, the page does not refresh, the location import does this automatically 
  async delete(){
    await this.cardsService.removeOneCard(this.card.id!);
    location.reload();
  }
  
}
