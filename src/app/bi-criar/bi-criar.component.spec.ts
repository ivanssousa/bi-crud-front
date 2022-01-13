import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiCriarComponent } from './bi-criar.component';

describe('BiCriarComponent', () => {
  let component: BiCriarComponent;
  let fixture: ComponentFixture<BiCriarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiCriarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiCriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
