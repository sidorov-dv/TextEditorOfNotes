import { Pipe, PipeTransform } from '@angular/core';
import { Cards } from './Cards';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(cards: Cards[], search: string = ''): Cards[] {
      if(!search.trim()) {
        return cards
      }
      return cards.filter(card => {
        return card.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
      })
  }
}
