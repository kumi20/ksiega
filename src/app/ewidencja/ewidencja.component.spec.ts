import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EwidencjaComponent } from './ewidencja.component';

describe('EwidencjaComponent', () => {
  let component: EwidencjaComponent;
  let fixture: ComponentFixture<EwidencjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EwidencjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EwidencjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
