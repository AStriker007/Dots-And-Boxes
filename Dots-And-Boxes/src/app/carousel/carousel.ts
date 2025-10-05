import { Component, output ,EventEmitter,Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselItem1 } from '../carousel-item1/carousel-item1';
import { CarouselItem2 } from '../carousel-item2/carousel-item2';
import { CarouselItem3 } from '../carousel-item3/carousel-item3';
import { CarouselItem4 } from '../carousel-item4/carousel-item4';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule, CarouselItem1, CarouselItem2, CarouselItem3, CarouselItem4],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css'
})
export class Carousel {
  @Output() messageEvent = new EventEmitter<boolean>();
  index: number = 0;
  leftActive:boolean=false;
  rightActive:boolean=false;
  okActive:boolean=false;

  turnLeft() {
    this.leftActive=false;
    this.index = ((this.index - 1) % 4);
    this.index = (this.index < 0) ? (this.index + 4) : this.index;
  }
  handlePointerDownOnLeft(){
    this.leftActive=true;
  }
  handlePointerDownOnRight(){
    this.rightActive=true;
  }
  turnRight() {
    this.rightActive=false;
    this.index = ((this.index + 1) % 4); 
  }
  handleOKPressDown(){
    this.okActive=true;
  }
  handleOKPressUp(){
    this.okActive=false;
    this.messageEvent.emit(false);
  }
}
