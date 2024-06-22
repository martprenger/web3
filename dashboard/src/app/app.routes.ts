import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import {LoginComponent} from "./login/login.component";
import { AuthGuard } from './api/auth-guard.service';
import {StatisticsComponent} from "./statistics/statistics.component";
import { ScoresComponent } from "./scores/scores.component";

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'players', component: PlayersComponent, canActivate: [AuthGuard] },
  { path: 'stats', component: StatisticsComponent, canActivate: [AuthGuard] },
  { path: 'scores', component: ScoresComponent, canActivate: [AuthGuard]},
  { path: '', redirectTo: '/players', pathMatch: 'full' } // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
