import { Component } from '@angular/core';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { ActivatedRoute } from '@angular/router';
import { Episode } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-detail-episode',
  templateUrl: './detail-episode.component.html',
  styleUrls: ['./detail-episode.component.scss'],
})
export class DetailEpisodeComponent {
  public episode?: Episode;
  private id: string | null = '';

  constructor(
    private route: ActivatedRoute,
    private rickAndMortyService: RickAndMortyService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  getEpisodeId() {
    this.rickAndMortyService.getEpisodeById(this.id).then((data) => {
      console.log(data);
      this.episode = data;
    });
  }

  ngOnInit() {
    this.getEpisodeId();
  }
}
