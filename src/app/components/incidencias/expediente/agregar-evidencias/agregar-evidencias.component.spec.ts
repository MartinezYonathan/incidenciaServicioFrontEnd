import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEvidenciasComponent } from './agregar-evidencias.component';

describe('AgregarEvidenciasComponent', () => {
  let component: AgregarEvidenciasComponent;
  let fixture: ComponentFixture<AgregarEvidenciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarEvidenciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarEvidenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
