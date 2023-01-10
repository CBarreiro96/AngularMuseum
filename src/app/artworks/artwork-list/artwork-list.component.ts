import { Component, OnInit } from '@angular/core';
import { ArtworkDetail } from '../artwork-details';
import { ArtworkService } from '../artwork.service';
import { Artwork } from '../artworks';

@Component({
  selector: 'app-artwork-list',
  templateUrl: './artwork-list.component.html',
  styleUrls: ['./artwork-list.component.css']
})
export class ArtworkListComponent implements OnInit {
  selectedArtwork!: ArtworkDetail;
  selected: boolean = false;
  artworks: Array<Artwork> = [];

  constructor(private artworkService: ArtworkService) {}

  getArtworks(): void {
    this.artworkService.getArtworks().subscribe((artworks) => {
      this.artworks = artworks;
      
    });
  }

  ngOnInit() {
    this.getArtworks();
  }

}
