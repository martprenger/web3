import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ApiService } from './api.service';
import {Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private apiService: ApiService, private router: Router) { }

  canActivate(): Observable<boolean> {
    return this.apiService.isAuthenticated().pipe(
      tap(isAuthenticated => {
        if (!isAuthenticated) {
          console.log('Not authenticated, redirecting to login');
          this.router.navigate(['/login']);
        }
      })
    );
  }
}

