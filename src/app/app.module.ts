import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './components/characters/characters.component';
import { CharacterItemComponent } from './components/character-item/character-item.component';
import { CharacterEpisodesComponent } from './components/character-episodes/character-episodes.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    CharacterItemComponent,
    CharacterEpisodesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
