import { Routes } from '@angular/router';
import { SplashScreen } from './splash-screen/splash-screen';
import { Game } from './game/game';
import { Carousel } from './carousel/carousel';

export const routes: Routes = [
  { path: '', component: SplashScreen },
  { path: 'game', component: Game },
  {path:'carousel',component:Carousel}
];
