import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemMonedaComponent } from './item-moneda.component';

describe('ItemMonedaComponent', () => {
  let component: ItemMonedaComponent;
  let fixture: ComponentFixture<ItemMonedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemMonedaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemMonedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
