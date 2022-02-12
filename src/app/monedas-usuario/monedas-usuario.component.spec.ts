import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonedasUsuarioComponent } from './monedas-usuario.component';

describe('MonedasUsuarioComponent', () => {
  let component: MonedasUsuarioComponent;
  let fixture: ComponentFixture<MonedasUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonedasUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonedasUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
