import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsToRentComponent } from './cards-to-rent.component';

describe('CardsToRentComponent', () => {
  let component: CardsToRentComponent;
  let fixture: ComponentFixture<CardsToRentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsToRentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardsToRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
