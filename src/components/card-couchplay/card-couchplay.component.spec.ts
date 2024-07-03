import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCouchplayComponent } from './card-couchplay.component';

describe('CardCouchplayComponent', () => {
  let component: CardCouchplayComponent;
  let fixture: ComponentFixture<CardCouchplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCouchplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardCouchplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
