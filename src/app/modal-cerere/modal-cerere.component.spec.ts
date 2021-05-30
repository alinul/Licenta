import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCerereComponent } from './modal-cerere.component';

describe('ModalCerereComponent', () => {
  let component: ModalCerereComponent;
  let fixture: ComponentFixture<ModalCerereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCerereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCerereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
