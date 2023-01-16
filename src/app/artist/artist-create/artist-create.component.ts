import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ImageService } from 'src/app/image/image.service';
import { Artist } from '../artist';
import { ArtistsService } from '../artist.service';
import { Image } from '../../image/image';

@Component({
  selector: 'app-artist-create',
  templateUrl: './artist-create.component.html',
  styleUrls: ['./artist-create.component.css'],
})
export class ArtistCreateComponent implements OnInit {
  artistForm!: FormGroup;
  images: Array<Image> = [];

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private artistService: ArtistsService,
    private imageService: ImageService
  ) {}

  ngOnInit() {
    this.artistForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(100),
        ],
      ],
      birthdate: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(40),
        ],
      ],
      birthplace: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(100),
        ],
      ],
      image: ['', [Validators.required]],
    });
    this.getImages();
  }

  createArtist(artist: Artist) {
    this.artistService.createArtist(artist).subscribe((artists) => {
      console.info('The artist was created: ', artists);
      this.toastr.success('Confirmation', 'Artist created');
      this.artistForm.reset();
    });
  }
  getImages(): void {
    this.imageService.getImages().subscribe((images) => {
      this.images = images;
    });
  }

  cancelCreation() {
    this.artistForm.reset();
  }

  get name() {
    return this.artistForm.get('name');
  }

  get birthdate() {
    return this.artistForm.get('birthdate');
  }

  get birthplace() {
    return this.artistForm.get('birthplace');
  }

  get image() {
    return this.artistForm.get('image');
  }
}
