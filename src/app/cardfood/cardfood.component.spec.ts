import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardfoodComponent } from './cardfood.component';

describe('CardfoodComponent', () => {
  let component: CardfoodComponent;
  let fixture: ComponentFixture<CardfoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardfoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
