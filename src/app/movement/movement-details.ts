import { Artist } from "../artist/artist";
import { Movement } from "./movement";

export class MovementDetail extends Movement {
  constructor(
    id: number,
    name: string,
    description: string,
    countryOfOrigin: string,
    artist: Artist[],
  ) {
    super(id, name, description,countryOfOrigin,artist);
  }
}