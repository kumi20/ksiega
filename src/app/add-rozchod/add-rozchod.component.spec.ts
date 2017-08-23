import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRozchodComponent } from './add-rozchod.component';

describe('AddRozchodComponent', () => {
  let component: AddRozchodComponent;
  let fixture: ComponentFixture<AddRozchodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRozchodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRozchodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
