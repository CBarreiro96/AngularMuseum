import { Component, OnInit } from '@angular/core';
import { Museum } from 'src/app/museum/museum';
import { MuseumService } from 'src/app/museum/museum.service';

@Component({
  selector: 'app-museum-section',
  templateUrl: './museum-section.component.html',
  styleUrls: ['./museum-section.component.css']
})
export class MuseumSectionComponent implements OnInit {

  LIMIT_MUSEUMS = 3;

  museums: Array<Museum> = [];

  constructor(private museumService: MuseumService) {}

  ngOnInit() {
    this.getMuseums();
  }

  getMuseums(): void {
    this.museumService.getMuseums().subscribe((museums) => {
      this.museums = museums.slice(0, this.LIMIT_MUSEUMS);
    });
  }

}
