import { Component, OnInit } from '@angular/core';
import { Museum } from '../museum';
import { MuseumService } from '../museum.service';

@Component({
  selector: 'app-museum-list',
  templateUrl: './museum-list.component.html',
  styleUrls: ['./museum-list.component.css']
})
export class MuseumListComponent implements OnInit {

  museums: Array<Museum> = [];
  selected: boolean = false;
  selectedMuseum!: Museum;

  constructor(private museumService: MuseumService) {}

  ngOnInit() {
    this.getMuseums();
  }

  getMuseums(): void {
    this.museumService.getMuseums().subscribe((museums) => {
      this.museums = museums;
    });
  }

  onSelected(museum: Museum): void {
    this.selected = true;
    this.selectedMuseum = museum;
  }

}
