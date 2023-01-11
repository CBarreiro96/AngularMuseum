import { Artwork } from "../artworks/artworks";
import { Image } from 'src/app/image/image';

export class Artist {
  id: number;
  name: string;
  birthplace: string;
  birthDate: Date;
  movements: any
  artworks: Artwork[];
  image: Image;

  constructor(
    id: number,
    name: string,
    birthplace: string,
    birthDate: Date,
    movements: any,
    artwork: Artwork[],
    image: Image
  ) {
    this.id = id;
    this.name = name;
    this.birthplace = birthplace;
    this.birthDate = birthDate;
    this.movements = movements;
    this.artworks = artwork;
    this.image = image;
  }
}