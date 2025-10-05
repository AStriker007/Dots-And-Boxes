import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselItem3 } from './carousel-item3';

describe('CarouselItem3', () => {
  let component: CarouselItem3;
  let fixture: ComponentFixture<CarouselItem3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselItem3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselItem3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
