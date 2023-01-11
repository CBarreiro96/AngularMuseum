import { Artist } from './artist';
import { Image } from 'src/app/image/image';
import { Artwork } from '../artworks/artworks';

export class ArtistDetail extends Artist {
  constructor(
    id: number,
    name: string,
    birthplace: string,
    birthDate: Date,
    movements: any,
    artworks: Artwork[],
    image: Image
  ) {
    super(id, name, birthplace, birthDate, movements, artworks, image);
  }
}
