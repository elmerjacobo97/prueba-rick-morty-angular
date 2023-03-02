import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CharactersComponent} from "./components/characters/characters.component";
import {CharacterItemComponent} from "./components/character-item/character-item.component";
import {CharacterEpisodesComponent} from "./components/character-episodes/character-episodes.component";

const routes: Routes = [
  { path: 'characters', component: CharactersComponent },
  { path: 'characters/:id', component: CharacterItemComponent },
  { path: 'episodes/:id', component: CharacterItemComponent },
  { path: '', redirectTo: '/characters', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
