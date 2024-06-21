import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { GamesComponent } from './games/games.component';
import {LoginComponent} from "./login/login.component";

export const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'players', component: PlayersComponent },
  { path: 'games', component: GamesComponent },
  { path: '', redirectTo: '/players', pathMatch: 'full' } // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
