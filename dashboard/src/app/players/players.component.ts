import { Component } from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [
    NavbarComponent
  ],
  templateUrl: './players.component.html',
  styleUrl: './players.component.css'
})
export class PlayersComponent {
  constructor(private apiService: ApiService) {
    apiService.requireAuth();
  }



}
