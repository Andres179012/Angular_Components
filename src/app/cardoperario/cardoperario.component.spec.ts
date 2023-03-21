import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardoperarioComponent } from './cardoperario.component';

describe('CardoperarioComponent', () => {
  let component: CardoperarioComponent;
  let fixture: ComponentFixture<CardoperarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardoperarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardoperarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
