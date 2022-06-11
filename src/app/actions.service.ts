import { Injectable } from '@angular/core';
import { Cards } from './Cards';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {

  constructor(private http: HttpClient) { }

  cards: Cards[] = [];
  searchCards: Cards[] = [];
  tags: string[] = [];
  curTags: string[] = [];
  subCards = new BehaviorSubject<Cards[]>([]);
  subTags = new BehaviorSubject<string[]>([]);
  file!: string;

  addCard(card: Cards) {
    this.cards.push(card);
    console.log(this.cards);
    this.file = JSON.stringify(this.cards);
    console.log(this.file);
    this.subCards.next(this.cards);
  }

  fetchCards() {
    // this.http.get<Cards[]>('./assets/cardsContent.json')
    //   .pipe(tap((item) => this.cards = item))
  }

  onToggle(id: number) {
    const idx = this.cards.findIndex(item => item.id === id);
    this.cards[idx].completed = !this.cards[idx].completed
  }

  removeCard(id: number) {
    this.cards = this.cards.filter(item => item.id !== id);
    this.subCards.next(this.cards);
  }

  saveCard(id: number, title: string, text: string) {
    const idx = this.cards.findIndex(item => item.id === id);
    this.cards[idx].title = title;
    this.cards[idx].text = text;
    this.subCards.next(this.cards);
    console.log(this.cards[idx]);
  }

  showAllCards() {
    this.subCards.next(this.cards);
  }

  createTags(curInput: string) {
    console.log(curInput);
    const regExpTag = /#([a-zA-Z0-9]{1,})(?![~!@$%^&*()=+_`\-\|\\/'\[\]\{\}]|[?.,]*\w)/g;
    const matchArr = curInput.match(regExpTag) || [];
    console.log(matchArr);
    let setInputTags = new Set(matchArr);
    this.curTags = Array.from(setInputTags);
    console.log(this.curTags);
    this.tags = [...this.tags, ...this.curTags];
    setInputTags = new Set(this.tags);
    this.tags = Array.from(setInputTags);
    this.subTags.next(this.tags);
  }

  deleteTag(tag: string) {
    const deleteIndex = this.tags.indexOf(tag);
    this.tags.splice(deleteIndex, 1);
  }

  findCardsByTag(tag: string) {
    this.searchCards = this.cards.filter((itemCard) => 
      itemCard.title.includes(tag) || itemCard.text.includes(tag)
    );
    this.subCards.next(this.searchCards);
  } 







}
