import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Carousel } from '../carousel/carousel';

@Component({
  selector: 'app-game',
  imports: [Carousel,CommonModule],
  templateUrl: './game.html',
  styleUrl: './game.css'
})
export class Game {
  active: boolean = false;
  showOverlay: boolean = false
  activate() {
    this.active = true;
  }
  deactivate() {
    this.active = false;
    this.showOverlay = true;
  }

  receiveMessage(overlayState:boolean){
    this.showOverlay=overlayState
  }
}
