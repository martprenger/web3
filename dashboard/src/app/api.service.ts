import { Injectable } from '@angular/core';
import {catchError, Observable, throwError} from 'rxjs';
import { map } from 'rxjs/operators';
import {HttpClient} from "@angular/common/http";
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

  requireAuth(): void {
    this.http.get<any>(`${this.url}/api/admin/aggregate`).pipe(
      catchError((error) => {
        console.log('error');
        this.router.navigate(['/login']);
        return throwError(error);
      })
    ).subscribe();
  }

}
