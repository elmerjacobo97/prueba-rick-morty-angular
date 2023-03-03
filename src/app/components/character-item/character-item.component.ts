import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { Character } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-character-item',
  templateUrl: './character-item.component.html',
  styleUrls: ['./character-item.component.scss'],
})
export class CharacterItemComponent {
  // Definir variables.
  public character?: Character;

  constructor(
    private rickAndMortyService: RickAndMortyService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  // Cuando el componente esté listo, se muestre la información del personaje.
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    // Validar que si ID no es un número, me envíe hacia la lista de personajes.
    if (!Number(id)) {
      this.router.navigateByUrl('/characters');
    }

    // Traer el personaje por ID con un servicio.
    this.rickAndMortyService.getCharacterById(id).then((character) => {
      this.character = character;
    });
  }

  getEpisode(url: string) {
    const segment = url.split('/');
    if (segment) {
      this.router.navigateByUrl(
        `/characters/episodes/${segment[segment.length - 1]}`
      );
    }
  }
}
