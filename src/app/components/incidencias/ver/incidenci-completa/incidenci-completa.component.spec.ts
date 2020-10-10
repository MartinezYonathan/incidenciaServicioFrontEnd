import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciCompletaComponent } from './incidenci-completa.component';

describe('IncidenciCompletaComponent', () => {
  let component: IncidenciCompletaComponent;
  let fixture: ComponentFixture<IncidenciCompletaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidenciCompletaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidenciCompletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
