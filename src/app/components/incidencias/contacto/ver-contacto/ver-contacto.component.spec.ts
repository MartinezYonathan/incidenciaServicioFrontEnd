import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerContactoComponent } from './ver-contacto.component';

describe('VerContactoComponent', () => {
  let component: VerContactoComponent;
  let fixture: ComponentFixture<VerContactoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerContactoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
