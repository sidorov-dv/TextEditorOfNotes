import { Injectable } from '@angular/core';
import { Cards } from './Cards';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {

  constructor(private http: HttpClient) { }

  cards: Cards[] = [];
  subCards = new BehaviorSubject<Cards[]>([]);

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







}
