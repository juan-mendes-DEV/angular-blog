import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraLateralDireitaComponent } from './barra-lateral-direita.component';

describe('BarraLateralDireitaComponent', () => {
  let component: BarraLateralDireitaComponent;
  let fixture: ComponentFixture<BarraLateralDireitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraLateralDireitaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraLateralDireitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
