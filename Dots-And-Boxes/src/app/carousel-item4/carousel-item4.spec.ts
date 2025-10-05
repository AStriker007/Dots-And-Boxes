import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselItem4 } from './carousel-item4';

describe('CarouselItem4', () => {
  let component: CarouselItem4;
  let fixture: ComponentFixture<CarouselItem4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselItem4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselItem4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
