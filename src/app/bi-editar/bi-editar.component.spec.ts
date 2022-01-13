import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiEditarComponent } from './bi-editar.component';

describe('BiEditarComponent', () => {
  let component: BiEditarComponent;
  let fixture: ComponentFixture<BiEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
