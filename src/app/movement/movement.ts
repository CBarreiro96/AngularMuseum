import { Artist } from '../artist/artist';

export class Movement {
  name: string;
  description: string;
  countryOfOrigin: string;
  artists: Artist[];

  public constructor(
    name: string,
    description: string,
    countryOfOrigin: string,
    artists: Artist[]
  ) {
    this.name = name;
    this.description = description;
    this.countryOfOrigin = countryOfOrigin;
    this.artists = artists;
  }
}