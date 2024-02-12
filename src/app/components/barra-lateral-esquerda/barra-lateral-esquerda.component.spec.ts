import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraLateralEsquerdaComponent } from './barra-lateral-esquerda.component';

describe('BarraLateralEsquerdaComponent', () => {
  let component: BarraLateralEsquerdaComponent;
  let fixture: ComponentFixture<BarraLateralEsquerdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraLateralEsquerdaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraLateralEsquerdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
