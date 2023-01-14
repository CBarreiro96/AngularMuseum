import { Artist } from '../artist/artist';

export class Movement {
  id:number;
  name: string;
  description: string;
  countryOfOrigin: string;
  artists: Artist[];

  public constructor(
    id:number,
    name: string,
    description: string,
    countryOfOrigin: string,
    artists: Artist[]
  ) {
    this.id =id
    this.name = name;
    this.description = description;
    this.countryOfOrigin = countryOfOrigin;
    this.artists = artists;
  }
}