import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movement } from './movement';
import { MovementDetail } from './movement-details';

@Injectable({
  providedIn: 'root'
})
export class MovementService {
  private apiUrl: string = environment.baseUrl + 'movements';


  constructor(private http: HttpClient) {}

  getMovements(): Observable<Movement[]> {
    return this.http.get<Movement[]>(this.apiUrl);
  }

  getMovement(id: number): Observable<MovementDetail> {
    return this.http.get<MovementDetail>(this.apiUrl + '/' + id);
  }

}
