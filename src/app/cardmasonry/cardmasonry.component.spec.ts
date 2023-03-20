import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardmasonryComponent } from './cardmasonry.component';

describe('CardmasonryComponent', () => {
  let component: CardmasonryComponent;
  let fixture: ComponentFixture<CardmasonryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardmasonryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardmasonryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
