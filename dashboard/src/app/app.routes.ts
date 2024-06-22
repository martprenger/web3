import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { GamesComponent } from './games/games.component';
import {LoginComponent} from "./login/login.component";
import { AuthGuard } from './api/auth-guard.service';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'players', component: PlayersComponent, canActivate: [AuthGuard] },
  { path: 'games', component: GamesComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/players', pathMatch: 'full' } // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
