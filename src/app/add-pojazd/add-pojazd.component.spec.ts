import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPojazdComponent } from './add-pojazd.component';

describe('AddPojazdComponent', () => {
  let component: AddPojazdComponent;
  let fixture: ComponentFixture<AddPojazdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPojazdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPojazdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
