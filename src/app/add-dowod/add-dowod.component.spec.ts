import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDowodComponent } from './add-dowod.component';

describe('AddDowodComponent', () => {
  let component: AddDowodComponent;
  let fixture: ComponentFixture<AddDowodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDowodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDowodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
