import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Museum } from '../museum';
import { MuseumService } from '../museum.service';

@Component({
  selector: 'app-museum-detail',
  templateUrl: './museum-detail.component.html',
  styleUrls: ['./museum-detail.component.css']
})
export class MuseumDetailComponent implements OnInit {

  @Input() museumDetail!: Museum;
  museumId!: number;
  openDirectly: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private museumService: MuseumService
  ) {}

  getMuseum() {
    this.museumService.getMuseum(this.museumId).subscribe((museum) => {
      this.museumDetail = museum;
    });
  }

  ngOnInit() {
    if (this.museumDetail === undefined) {
      const id = this.route.snapshot.paramMap.get('id')!;
      if (id) {
        this.openDirectly = true;
        this.museumId = Number(id);
        this.getMuseum();
      }
    }
  }

}
