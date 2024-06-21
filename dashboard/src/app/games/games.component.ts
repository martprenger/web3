import { Component } from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [
    NavbarComponent
  ],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  constructor(private apiService: ApiService) {
  }
}
