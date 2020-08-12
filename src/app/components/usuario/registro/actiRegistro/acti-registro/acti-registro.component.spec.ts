import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiRegistroComponent } from './acti-registro.component';

describe('ActiRegistroComponent', () => {
  let component: ActiRegistroComponent;
  let fixture: ComponentFixture<ActiRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
