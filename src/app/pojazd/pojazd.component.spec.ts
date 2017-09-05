import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PojazdComponent } from './pojazd.component';

describe('PojazdComponent', () => {
  let component: PojazdComponent;
  let fixture: ComponentFixture<PojazdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PojazdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PojazdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
