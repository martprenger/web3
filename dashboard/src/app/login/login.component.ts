import { Component } from '@angular/core';
import {ApiService} from "../api.service";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';


  constructor(private apiService: ApiService, private router: Router) {
  }

  login(): void {
    this.apiService.login(this.username, this.password).subscribe(
      success => {
        if (!success) {
          this.errorMessage = 'Invalid username or password';
        } else {
          this.router.navigate(['']);
        }
      },
      error => {
        this.errorMessage = 'An error occurred';
      }
    );
  }
}
