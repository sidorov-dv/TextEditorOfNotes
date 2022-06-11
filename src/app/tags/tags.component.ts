import { Component, OnInit } from '@angular/core';
import { ActionsService } from '../actions.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  constructor(private actionsService: ActionsService) { }

  tags: string[] = [];

  ngOnInit(): void {
    this.actionsService.subTags.subscribe((tags: any) => this.tags = tags);
  }

  deleteTag(tag: string) {
    this.actionsService.deleteTag(tag);
  }

  findCardsByTag(tag: string) {
    this.actionsService.findCardsByTag(tag);
  }

}
