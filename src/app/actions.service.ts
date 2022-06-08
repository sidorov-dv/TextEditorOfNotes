import { Injectable } from '@angular/core';
import { Cards } from './Cards';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {

  constructor(private http: HttpClient) { }

  cards: Cards[] = []

  fetchCards(): Observable<Cards[]> {
    return this.http.get<Cards[]>('./assets/cardsContent.json')
    .pipe(tap(cards => this.cards = cards))
  }

  onToggle(id: number) {
    const idx = this.cards.findIndex(item => item.id === id);
    this.cards[idx].completed = !this.cards[idx].completed
  }

  removeItem(id: number) {
    this.cards = this.cards.filter(item => item.id !== id)
  }

  addCard(card: Cards) {
    this.cards.push(card)
  }





}
