import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerEvidenciasAdminComponent } from './ver-evidencias-admin.component';

describe('VerEvidenciasAdminComponent', () => {
  let component: VerEvidenciasAdminComponent;
  let fixture: ComponentFixture<VerEvidenciasAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerEvidenciasAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerEvidenciasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
