import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarreDeRechercheComponent } from './barre-de-recherche.component';

describe('BarreDeRechercheComponent', () => {
  let component: BarreDeRechercheComponent;
  let fixture: ComponentFixture<BarreDeRechercheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarreDeRechercheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarreDeRechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
