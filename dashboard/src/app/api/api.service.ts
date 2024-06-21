import { Injectable } from '@angular/core';
import {catchError, Observable, of, tap, throwError} from 'rxjs';
import { map } from 'rxjs/operators';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = 'http://localhost:8000';

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<any>(`${this.url}/api/login_check`, {username, password}).pipe(
      map(response => {
        if (response && response.token) {
          localStorage.setItem('token', response.token);
          return true;
        }
        return false;
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): Observable<boolean> {
    return this.http.get<any>(`${this.url}/api/admin/aggregate`, { observe: 'response' }).pipe(
      map((response: HttpResponse<any>) => {
        return response.status === 200;
      }),
      catchError(error => {
        console.log(error);
        return of(false);
      })
    );
  }

  getPlayerData(): Observable<any> {
    return this.http.get<any>(`${this.url}/api/admin/players`);
  }
}
