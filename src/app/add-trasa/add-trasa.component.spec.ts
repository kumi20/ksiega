import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrasaComponent } from './add-trasa.component';

describe('AddTrasaComponent', () => {
  let component: AddTrasaComponent;
  let fixture: ComponentFixture<AddTrasaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTrasaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTrasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
