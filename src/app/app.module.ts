import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { AddCardComponent } from './add-card/add-card.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { TagsComponent } from './tags/tags.component';
import { HightlightDirective } from './hightlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    AddCardComponent,
    SearchPipe,
    TagsComponent,
    HightlightDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
