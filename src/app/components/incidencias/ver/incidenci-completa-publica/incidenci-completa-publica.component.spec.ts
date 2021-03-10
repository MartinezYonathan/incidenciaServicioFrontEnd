import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciCompletaPublicaComponent } from './incidenci-completa-publica.component';

describe('IncidenciCompletaPublicaComponent', () => {
  let component: IncidenciCompletaPublicaComponent;
  let fixture: ComponentFixture<IncidenciCompletaPublicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidenciCompletaPublicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidenciCompletaPublicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
