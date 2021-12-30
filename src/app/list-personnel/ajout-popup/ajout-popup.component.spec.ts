import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutPopupComponent } from './ajout-popup.component';

describe('AjoutPopupComponent', () => {
  let component: AjoutPopupComponent;
  let fixture: ComponentFixture<AjoutPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
