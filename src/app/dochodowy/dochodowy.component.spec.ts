import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DochodowyComponent } from './dochodowy.component';

describe('DochodowyComponent', () => {
  let component: DochodowyComponent;
  let fixture: ComponentFixture<DochodowyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DochodowyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DochodowyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
