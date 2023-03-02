import { Component } from '@angular/core';
import {RickAndMortyService} from "../../services/rick-and-morty.service";
import {Character} from "../../../interfaces/interfaces";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {
  characters: any = [];

  constructor(private rickAndMortyService: RickAndMortyService) { }

  ngOnInit() {
    this.rickAndMortyService.getCharacters().then(characters => {
      console.log(characters)
      // this.characters = characters;
      this.characters = [...this.characters, ...characters];
    });
  }
}
