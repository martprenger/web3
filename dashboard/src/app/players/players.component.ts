import { Component } from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";

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

}
