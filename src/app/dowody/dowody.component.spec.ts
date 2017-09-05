import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DowodyComponent } from './dowody.component';

describe('DowodyComponent', () => {
  let component: DowodyComponent;
  let fixture: ComponentFixture<DowodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DowodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DowodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
