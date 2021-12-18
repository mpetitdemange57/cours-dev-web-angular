import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPersonnelComponent } from './list-personnel.component';

describe('ListPersonnelComponent', () => {
  let component: ListPersonnelComponent;
  let fixture: ComponentFixture<ListPersonnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPersonnelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
