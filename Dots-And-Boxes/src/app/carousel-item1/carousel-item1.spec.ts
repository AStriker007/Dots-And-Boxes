import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselItem1 } from './carousel-item1';

describe('CarouselItem1', () => {
  let component: CarouselItem1;
  let fixture: ComponentFixture<CarouselItem1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselItem1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselItem1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
