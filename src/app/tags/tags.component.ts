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
  newTag: string = '';

  ngOnInit(): void {
    this.actionsService.subTags.subscribe((tags: any) => this.tags = tags);
  }

  addTag(tag: string) {
    const regExpTagInput = /#?\w{1,}/;
    if (regExpTagInput.test(tag)) {
      this.actionsService.addTag(tag);
    } 
    this.newTag = '';
  }

  deleteTag(tag: string) {
    this.actionsService.deleteTag(tag);
  }

  findCardsByTag(tag: string) {
    this.actionsService.findCardsByTag(tag);
  }

}
