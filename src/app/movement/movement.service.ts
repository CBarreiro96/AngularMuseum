import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movement } from './movement';

@Injectable({
  providedIn: 'root'
})
export class MovementService {
  private apiUrl: string = environment.baseUrl + 'movements';


  constructor(private http: HttpClient) {}

  getMovements(): Observable<Movement[]> {
    return this.http.get<Movement[]>(this.apiUrl);
  }

}
