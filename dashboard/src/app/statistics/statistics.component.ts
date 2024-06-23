import { Component } from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import {ApiService} from "../api/api.service";
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {DateRangeFilterPipe} from "../pipeFilters/date-range-filter.pipe";

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [
    NavbarComponent,
    FormsModule,
    NgForOf,
    DateRangeFilterPipe
  ],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.css'
})

export class StatisticsComponent {
  public gamesData: any[] = [];
  public dateFrom: string = '';
  public dateTo: string = '';

  constructor(private apiService: ApiService) {
    this.apiService.getStatisticsData().subscribe(
      data => {
        // Transform the object into an array of objects
        this.gamesData = Object.entries(data).map(([date, games]) => ({date, games}));
        console.log(this.gamesData);
      },
      error => {
        console.error('Error:', error);
      }
    );
  }

}
