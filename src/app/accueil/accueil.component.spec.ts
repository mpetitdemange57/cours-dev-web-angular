import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilComponent } from './accueil.component';

describe('AccueilComponent', () => {
  let component: AccueilComponent;
  let fixture: ComponentFixture<AccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //test
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // test
  it('should return some value', () => {
    expect(service.getSomeValue()).toContain('some value');
  });

  // test
  it('should return some value asynchronously', async (done) => {
    service.getSomeValueAsync().subscribe(value => {
      expect(value).toContain('some value');
      done();
    })
  });

});
