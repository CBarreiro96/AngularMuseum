import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { Image } from '../image';

@Component({
  selector: 'app-image-selector',
  templateUrl: './image-selector.component.html',
  styleUrls: ['./image-selector.component.css']
})
export class ImageSelectorComponent implements OnInit {

  images: Array<Image> = [];

  constructor(private imageService: ImageService) {}

  ngOnInit() {
    this.getImages();
  }

  getImages(): void {
    this.imageService.getImages().subscribe((images) => {
      this.images = images;
    });
  }

}
