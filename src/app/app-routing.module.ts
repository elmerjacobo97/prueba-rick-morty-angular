import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { CharacterItemComponent } from './components/character-item/character-item.component';
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";

// Definir rutas.
const routes: Routes = [
  { path: 'characters', component: CharactersComponent },
  { path: 'characters/:id', component: CharacterItemComponent },
  { path: '', redirectTo: '/characters', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
