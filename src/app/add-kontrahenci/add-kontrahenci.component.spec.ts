import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKontrahenciComponent } from './add-kontrahenci.component';

describe('AddKontrahenciComponent', () => {
  let component: AddKontrahenciComponent;
  let fixture: ComponentFixture<AddKontrahenciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddKontrahenciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddKontrahenciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
