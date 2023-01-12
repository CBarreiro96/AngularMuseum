import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/artist/artist';
import { ArtistsService } from 'src/app/artist/artist.service';

@Component({
  selector: 'app-artist-section',
  templateUrl: './artist-section.component.html',
  styleUrls: ['./artist-section.component.css']
})
export class ArtistSectionComponent implements OnInit {

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
