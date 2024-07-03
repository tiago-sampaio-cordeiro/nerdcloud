import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseScreenComponent } from './browse-screen.component';

describe('BrowseScreenComponent', () => {
  let component: BrowseScreenComponent;
  let fixture: ComponentFixture<BrowseScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowseScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrowseScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
