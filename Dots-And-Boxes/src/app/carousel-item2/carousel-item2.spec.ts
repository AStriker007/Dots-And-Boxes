import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselItem2 } from './carousel-item2';

describe('CarouselItem2', () => {
  let component: CarouselItem2;
  let fixture: ComponentFixture<CarouselItem2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselItem2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselItem2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
