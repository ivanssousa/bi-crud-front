import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiListarComponent } from './bi-listar.component';

describe('BiListarComponent', () => {
  let component: BiListarComponent;
  let fixture: ComponentFixture<BiListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
