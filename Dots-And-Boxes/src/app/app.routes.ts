import { Routes } from '@angular/router';
import { SplashScreen } from './splash-screen/splash-screen';
import { Game } from './game/game';

export const routes: Routes = [
  { path: '', component: SplashScreen },
  { path: 'game', component: Game }
];
