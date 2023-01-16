import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistDetail } from '../artist-detail';
import { ArtistsService } from '../artist.service';


@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.css']
})
export class ArtistDetailComponent implements OnInit {

  artistId!: number;
  @Input() artistDetail!: ArtistDetail;

  constructor(
    private route: ActivatedRoute,
    private artistService: ArtistsService
  ) {}

  getArtist() {
    this.artistService.getArtist(this.artistId).subscribe((artist) => {
      this.artistDetail = artist;
    });
  }

  ngOnInit() {
    if (this.artistDetail === undefined) {
      this.artistId = parseInt(this.route.snapshot.paramMap.get('id')!);
      if (this.artistId) {
        this.getArtist();
      }
    }
  }

}
