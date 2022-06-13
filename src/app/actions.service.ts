import { Injectable } from '@angular/core';
import { Cards } from './Cards';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {

  constructor() { }

  cards: Cards[] = [];
  searchCards: Cards[] = [];
  tags: string[] = [];
  curTags: string[] = [];
  subCards = new BehaviorSubject<Cards[]>([]);
  subTags = new BehaviorSubject<string[]>([]);
  file!: string;

  addCard(card: Cards) {
    this.cards.push(card);
    this.file = JSON.stringify(this.cards);
    this.subCards.next(this.cards);
  }

  removeCard(id: number) {
    this.cards = this.cards.filter(item => item.id !== id);
    this.file = JSON.stringify(this.cards);
    this.subCards.next(this.cards);
  }

  saveCard(id: number, title: string, text: string) {
    const idx = this.cards.findIndex(item => item.id === id);
    this.cards[idx].id = Date.now();
    this.cards[idx].title = title;
    this.cards[idx].text = text;
    this.file = JSON.stringify(this.cards);
    this.subCards.next(this.cards);
  }

  showAllCards() {
    this.subCards.next(this.cards);
  }

  deleteAllCards() {
    this.cards.length = 0;
    this.subCards.next(this.cards);
  }

  createTags(curInput: string) {
    const regExpTag = /#\w{1,}/g;
    const matchArr = curInput.match(regExpTag) || [];
    let setInputTags = new Set(matchArr);
    this.curTags = Array.from(setInputTags);
    this.tags = [...this.tags, ...this.curTags];
    setInputTags = new Set(this.tags);
    this.tags = Array.from(setInputTags);
    this.subTags.next(this.tags);
  }

  addTag(newtag: string) {
    if (!newtag.startsWith('#')) {
      newtag = '#' + newtag;
      if (!this.tags.includes(newtag)) {
        this.tags.push(newtag);
      }
    } else if (!this.tags.includes(newtag)) {
      this.tags.push(newtag)
    }
    this.subTags.next(this.tags);
  }

  deleteTag(tag: string) {
    const deleteIndex = this.tags.indexOf(tag);
    this.tags.splice(deleteIndex, 1);
    this.subTags.next(this.tags);
  }

  findCardsByTag(tag: string) {
    this.searchCards = this.cards.filter((itemCard) =>
      itemCard.title.includes(tag) || itemCard.text.includes(tag));
    this.subCards.next(this.searchCards);
  }
}
