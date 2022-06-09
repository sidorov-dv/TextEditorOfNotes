import { Component, OnInit } from '@angular/core';
import { ActionsService } from '../actions.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(public actionsService: ActionsService) { }

  loading = true
  searchString = ''

  ngOnInit(): void {
    this.actionsService.fetchCards()
    .pipe(delay(500)).subscribe(() => this.loading = false)
  }

  onChange(id: number) {
    this.actionsService.onToggle(id)
  }

  removeCard(id: number) {
    this.actionsService.removeCard(id)
  }

  saveCard() {
    this.actionsService.saveCard()
  }



}
