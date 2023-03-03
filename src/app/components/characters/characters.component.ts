import { Component, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent {
  // Definir variables
  public personajes: Character[] = [];
  public paginaActual: number = 1;
  public isLoading: boolean = false;

  constructor(private http: HttpClient) {}

  // Consultar todos los personajes
  getCharacters() {
    this.isLoading = true;
    const url = `https://rickandmortyapi.com/api/character?page=${this.paginaActual}`;
    this.http.get(url).subscribe((data: any) => {
      this.personajes = [...this.personajes, ...data.results];
      this.isLoading = false;
    });
  }

  // Que cargue cuando el componente esté listo.
  ngOnInit() {
    this.getCharacters();
  }

  // Scroll para que carguen todos los personajes.
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const posicionActual = document.documentElement.scrollTop;
    const alturaTotal = document.documentElement.scrollHeight;
    const alturaVentana = document.documentElement.clientHeight;
    const porcentaje = (posicionActual / (alturaTotal - alturaVentana)) * 100;
    if (porcentaje >= 80) {
      this.paginaActual++;
      this.getCharacters();
    }
  }
}
