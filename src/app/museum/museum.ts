import { Artwork } from "../artworks/artworks";
import { Image } from '../image/image';

export class Museum {
  id: number;
  name: string;
  description: string;
  city: string;
  address: string;
  image: Image;
  artworks: Artwork[] | any | null;
  constructor(
    id: number,
    name: string,
    description: string,
    city: string,
    address: string,
    image: Image,
    artworks: Artwork[] | any | null,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.city = city;
    this.address = address;
    this.image = image;
    this.artworks = artworks;
  }
}