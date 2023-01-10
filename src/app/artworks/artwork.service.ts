import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, Observable, throwError } from 'rxjs';

import { ArtworkDetail } from './artwork-details';
import { Artwork } from './artworks';


@Injectable({
  providedIn: 'root',
})
export class ArtworkService {
  private apiUrl: string = environment.baseUrl + 'artworks';


  constructor(private http: HttpClient) { }

  getArtworks(): Observable<Artwork[]> {
    return this.http
      .get<ArtworkDetail[]>(this.apiUrl)
      .pipe(
        catchError((err) => throwError(() => new Error('error en el servicio')))
      );
  }

  getArtwork(id: number): Observable<ArtworkDetail> {
    return this.http.get<ArtworkDetail>(this.apiUrl + '/' + id);
  }

}
