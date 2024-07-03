import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentedScreenComponent } from './rented-screen.component';

describe('RentedScreenComponent', () => {
  let component: RentedScreenComponent;
  let fixture: ComponentFixture<RentedScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RentedScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RentedScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
