import { Component } from '@angular/core';
import { Card } from '../card';
import { Input } from '@angular/core';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-general-card',
  templateUrl: './general-card.component.html',
  styleUrls: ['./general-card.component.css']
})
export class GeneralCardComponent {
  @Input() card!: Card;
  newTaskDescription: string = "";
  edit: boolean = false;

  constructor(private cardsService: CardsService) {
  }

  // Save the new description
  async save() {
    this.card.taskDescription = this.newTaskDescription;
    this.edit = false
    this.cardsService.editCard(this.card);
  }

  // When delete the card, the page does not refresh, the location import does this automatically
  async delete() {
    await this.cardsService.removeOneCard(this.card.id!);
    location.reload();
  }

}
