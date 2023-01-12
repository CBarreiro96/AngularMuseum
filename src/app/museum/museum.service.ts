import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Museum } from './museum';

@Injectable({
    providedIn: 'root',
})
export class MuseumService {

    private apiUrl: string = environment.baseUrl + 'museums';

    constructor(private http: HttpClient) {}
  
    getMuseums(): Observable<Museum[]> {
      return this.http.get<Museum[]>(this.apiUrl);
    }
  
    getMuseum(id: number): Observable<Museum> {
      const url = `${this.apiUrl}/${id}`;
      return this.http.get<Museum>(url);
    }

}
