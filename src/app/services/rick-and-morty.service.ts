import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RickAndMortyService {
  private apiUrl = 'https://rickandmortyapi.com/api';

  // Consultar los personajes por ID
  getCharacterById(id: string | null) {
    return fetch(`${this.apiUrl}/character/${id}`)
      .then((response) => response.json())
      .then((data) => data);
  }
}
