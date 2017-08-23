import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPrzychodComponent } from './add-przychod.component';

describe('AddPrzychodComponent', () => {
  let component: AddPrzychodComponent;
  let fixture: ComponentFixture<AddPrzychodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPrzychodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPrzychodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
