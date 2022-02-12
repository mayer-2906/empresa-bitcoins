import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonedasDisponiblesComponent } from './monedas-disponibles.component';

describe('MonedasDisponiblesComponent', () => {
  let component: MonedasDisponiblesComponent;
  let fixture: ComponentFixture<MonedasDisponiblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonedasDisponiblesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonedasDisponiblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
