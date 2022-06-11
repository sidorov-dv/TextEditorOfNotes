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

  inputTitle: string = '';
  inputText: string = '';

  ngOnInit(): void {

  }

  addTextCard() {
    const itemOfCards: Cards = {
      id: Date.now(),
      title: this.inputTitle,
      completed: true,
      text: this.inputText,
    }

    this.actionsService.addCard(itemOfCards);
    this.inputTitle = '';
    this.inputText = '';
  }

  createTag(input: string) {
    this.actionsService.createTags(input);
  }

}
