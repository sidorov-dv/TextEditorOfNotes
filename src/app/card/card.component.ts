import { Component, OnInit } from '@angular/core';
import { ActionsService } from '../actions.service';
import { Cards } from '../Cards';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(public actionsService: ActionsService) { }

  searchString = '';
  cardCollections!: Cards[];

  ngOnInit(): void {
    this.actionsService.subCards.subscribe((cards: any) => this.cardCollections = cards);
  }

  createTag(curText: string) {
    this.actionsService.createTags(curText)
  }

  removeCard(id: number) {
    this.actionsService.removeCard(id)
  }

  saveCard(id: number, title: string, text: string) {
    this.actionsService.saveCard(id, title, text)
  }

  showAllCards() {
    this.actionsService.showAllCards();
  }

  deleteAllCards() {
    this.actionsService.deleteAllCards()
  }
}
