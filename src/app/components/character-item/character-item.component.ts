import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RickAndMortyService} from "../../services/rick-and-morty.service";
import {Character} from "../../../interfaces/interfaces";
import {data} from "autoprefixer";

@Component({
  selector: 'app-character-item',
  templateUrl: './character-item.component.html',
  styleUrls: ['./character-item.component.scss']
})
export class CharacterItemComponent {
  character?: Character;
  episodes?: any[];

  constructor(
    private rickAndMortyService: RickAndMortyService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.rickAndMortyService.getCharacterById(id).then(data => {
      this.character = data;
      this.getEpisodes()
    });
  }

  getEpisodes() {
    this.rickAndMortyService.getEpisodio()
  }
}
