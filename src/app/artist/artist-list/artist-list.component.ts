import { Component, OnInit } from '@angular/core';
import { Artist } from '../artist';
import { ArtistsService } from '../artist.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css'],
})
export class ArtistListComponent implements OnInit {
  artists: Array<Artist> = [];
  constructor(private artistService: ArtistsService) {}

  getArtists(): void {
    this.artistService.getArtists().subscribe((artist) => {
      this.artists = artist;
    });
  }

  ngOnInit() {
    this.getArtists();
  }
}
