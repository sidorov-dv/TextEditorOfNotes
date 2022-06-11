import { Component, OnInit } from '@angular/core';
import { ActionsService } from '../actions.service';
import { delay } from 'rxjs/operators';
import { Cards } from '../Cards'; 

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(public actionsService: ActionsService) { }

  loading = false
  searchString = ''
  cardCollections!: Cards[]

  ngOnInit(): void {
    this.actionsService.subCards.subscribe((cards: any) => this.cardCollections = cards)
   // this.actionsService.subCards.subscribe((search: any) => this.searchCards = search)
   // this.cardCollections = this.actionsService.cards
    // this.actionsService.fetchCards()
    // .pipe(delay(500)).subscribe(() => this.loading = false)
  }

  onChange(id: number) {
    this.actionsService.onToggle(id)
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



}
