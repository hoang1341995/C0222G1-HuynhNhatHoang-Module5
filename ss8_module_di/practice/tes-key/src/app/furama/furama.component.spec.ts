import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuramaComponent } from './furama.component';

describe('FuramaComponent', () => {
  let component: FuramaComponent;
  let fixture: ComponentFixture<FuramaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuramaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
