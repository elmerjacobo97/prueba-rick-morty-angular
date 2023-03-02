import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {data} from "autoprefixer";

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  private apiUrl = 'https://rickandmortyapi.com/api';

  constructor() { }

  getCharacters() {
    return fetch(`${this.apiUrl}/character`)
      .then(response => response.json())
      .then(data => data.results);
  }

  getCharacterById(id: string | null) {
    return fetch(`${this.apiUrl}/character/${id}`)
      .then(response => response.json())
      .then(data => data);
  }

  getEpisodio() {
    fetch(`${this.apiUrl}/episode`)
      .then(response => response.json())
      .then(data => data.results);
  }
}


