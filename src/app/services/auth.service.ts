import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/login`;

  constructor(private http: HttpClient) { }

  login(credentials: { nombre: string; clave: string }): Observable<boolean> {
    return this.http.post<{ jwtToken: string }>(this.apiUrl, credentials).pipe(
      map(response => {
        //jwtToken
        localStorage.setItem('token', response.jwtToken);
        return true;
      }),
      catchError(error => {
        console.error(error);
        return of(false);
      })
    );
  }
}
