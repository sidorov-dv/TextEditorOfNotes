import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { AddCardComponent } from './add-card/add-card.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { TagsComponent } from './tags/tags.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    AddCardComponent,
    SearchPipe,
    TagsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
