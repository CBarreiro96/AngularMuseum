import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Artist } from './artist';
import { ArtistDetail } from './artist-detail';

@Injectable({
  providedIn: 'root',
})
export class ArtistsService {

  private apiUrl: string = environment.baseUrl + 'artists';

  constructor(private http: HttpClient) {}

  getArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>(this.apiUrl);
  }

  getArtist(id: number): Observable<ArtistDetail> {
    return this.http.get<ArtistDetail>(this.apiUrl + '/' + id);
  }

  createArtist(artist: Artist): Observable<Artist> {
    return this.http.post<Artist>(this.apiUrl, artist);
  }

}
