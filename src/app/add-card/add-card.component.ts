import { Component, OnInit } from '@angular/core';
import { ActionsService } from '../actions.service';
import { Cards } from '../Cards'; 

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent implements OnInit {

  constructor(private actionsService: ActionsService) { }

  ngOnInit(): void {
  }

  inputText: string = ''

  addTextCard() {
    const itemOfCards: Cards = {
      title: this.inputText,
      id: Date.now(),
      completed: false,
      text: this.inputText,
      tag: '#'
    }

    this.actionsService.addCard(itemOfCards);
    this.inputText = '';
  }

}
