import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtworkDetail } from '../artwork-details';
import { ArtworkService } from '../artwork.service';

@Component({
  selector: 'app-artwork-details',
  templateUrl: './artwork-details.component.html',
  styleUrls: ['./artwork-details.component.css']
})
export class ArtworkDetailsComponent implements OnInit {

  artworkId!: number;

  @Input() artworkDetail!: ArtworkDetail; 

  constructor(
    private route: ActivatedRoute,
    private artworkService: ArtworkService
  ) {}

  getArtwork() {
    this.artworkService.getArtwork(this.artworkId).subscribe((artwork) => {
      this.artworkDetail = artwork
    });
  }

  ngOnInit() {
    if (this.artworkDetail === undefined) {
      this.artworkId = parseInt(this.route.snapshot.paramMap.get('id')!);

      if (this.artworkId) {
        this.getArtwork();
      }
    } 
  }

}
