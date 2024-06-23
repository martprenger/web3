import { Component } from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import {ApiService} from "../api/api.service";
import {FilterPipe} from "../pipeFilters/filter.pipe";
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [
    NavbarComponent,
    FilterPipe,
    FormsModule,
    NgForOf
  ],
  templateUrl: './scores.component.html',
  styleUrl: './scores.component.css'
})

export class ScoresComponent {
  public gamesData: any;
  public scoreFilter: string = '';
  public usernameFilter: string = '';

  constructor(private apiService: ApiService) {
    this.apiService.getScoresData().subscribe(
      data => {
        this.gamesData = data;
        console.log(this.gamesData);
      },
      error => {
        console.error('Error:', error);
      }
    );
  }
}
