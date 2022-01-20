import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangueBoutonComponent } from './langue-bouton.component';

describe('LangueBoutonComponent', () => {
  let component: LangueBoutonComponent;
  let fixture: ComponentFixture<LangueBoutonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LangueBoutonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LangueBoutonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
