import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiMostrarComponent } from './bi-mostrar.component';

describe('BiMostrarComponent', () => {
  let component: BiMostrarComponent;
  let fixture: ComponentFixture<BiMostrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiMostrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiMostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
