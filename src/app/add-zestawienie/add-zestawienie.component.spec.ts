import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddZestawienieComponent } from './add-zestawienie.component';

describe('AddZestawienieComponent', () => {
  let component: AddZestawienieComponent;
  let fixture: ComponentFixture<AddZestawienieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddZestawienieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddZestawienieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
