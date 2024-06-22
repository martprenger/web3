import { Component } from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import {ApiService} from "../api/api.service";
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {FilterPipe} from "../filter.pipe";

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [
    NavbarComponent,
    NgForOf,
    FormsModule,
    FilterPipe
  ],
  templateUrl: './players.component.html',
  styleUrl: './players.component.css'
})

export class PlayersComponent {
  public playerData: any;
  public usernameFilter: string = '';
  public emailFilter: string = '';

  constructor(private apiService: ApiService) {
    this.apiService.getPlayerData().subscribe(
      data => {
        this.playerData = data;
        console.log(this.playerData);
      },
      error => {
        console.error('Error:', error);
      }
    );
  }
}
