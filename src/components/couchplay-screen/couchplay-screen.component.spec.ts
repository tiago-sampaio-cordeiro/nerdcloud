import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouchplayScreenComponent } from './couchplay-screen.component';

describe('CouchplayScreenComponent', () => {
  let component: CouchplayScreenComponent;
  let fixture: ComponentFixture<CouchplayScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CouchplayScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CouchplayScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
