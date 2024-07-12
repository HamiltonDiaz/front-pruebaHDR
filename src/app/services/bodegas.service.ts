import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class BodegasService {

  private apiUrl = `${environment.apiUrl}/bodegas`;

  constructor(private http: HttpClient) {}

  submitBodega(bodega: any): Observable<any> {
    return this.http.post(this.apiUrl, bodega);
  }
}
