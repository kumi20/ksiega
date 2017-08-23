import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KsiegaComponent } from './ksiega.component';

describe('KsiegaComponent', () => {
  let component: KsiegaComponent;
  let fixture: ComponentFixture<KsiegaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KsiegaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KsiegaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
