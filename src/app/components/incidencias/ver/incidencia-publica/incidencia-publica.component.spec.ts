import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciaPublicaComponent } from './incidencia-publica.component';

describe('IncidenciaPublicaComponent', () => {
  let component: IncidenciaPublicaComponent;
  let fixture: ComponentFixture<IncidenciaPublicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidenciaPublicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidenciaPublicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
