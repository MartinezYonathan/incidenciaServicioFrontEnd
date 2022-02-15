import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpedienteAdminAsignadoComponent } from './expediente-admin-asignado.component';

describe('ExpedienteAdminAsignadoComponent', () => {
  let component: ExpedienteAdminAsignadoComponent;
  let fixture: ComponentFixture<ExpedienteAdminAsignadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpedienteAdminAsignadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpedienteAdminAsignadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
