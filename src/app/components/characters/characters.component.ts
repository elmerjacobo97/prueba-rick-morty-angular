import {Component, HostListener} from '@angular/core';
import {RickAndMortyService} from "../../services/rick-and-morty.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {
  personajes: any[] = [];
  paginaActual = 1;

  constructor(private http: HttpClient) { }

  getCharacters() {
    const url = `https://rickandmortyapi.com/api/character?page=${this.paginaActual}`;
    this.http.get(url).subscribe((data: any) => {
      this.personajes = [...this.personajes, ...data.results];
    });
  }

  ngOnInit() {
    this.getCharacters();
  }

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
