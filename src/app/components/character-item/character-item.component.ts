import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RickAndMortyService} from "../../services/rick-and-morty.service";
import {Character, Episode} from "../../../interfaces/interfaces";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-character-item',
  templateUrl: './character-item.component.html',
  styleUrls: ['./character-item.component.scss']
})

export class CharacterItemComponent {
  character?: Character;
  episodes?: Episode[];

  constructor(
    private rickAndMortyService: RickAndMortyService,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.rickAndMortyService.getCharacterById(id).then(character => {
      this.character = character;
    });
  }
}
