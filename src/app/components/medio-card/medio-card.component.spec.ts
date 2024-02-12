import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedioCardComponent } from './medio-card.component';

describe('MedioCardComponent', () => {
  let component: MedioCardComponent;
  let fixture: ComponentFixture<MedioCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedioCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedioCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
