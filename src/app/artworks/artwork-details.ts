import { Artwork } from "./artworks";
import { Image } from '../image/image';
import { Artist } from "./artist/artist";

export class ArtworkDetail extends Artwork {
  constructor(
    id: number,
    name: string,
    type: string,
    year: number,
    description: string,
    image: Image[],
    artist: Artist,
  ) {
    super(id, name, year, description, type, image,artist);
    this.artist = artist;
  }
}