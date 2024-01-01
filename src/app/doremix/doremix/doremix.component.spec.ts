import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoremixComponent } from './doremix.component';

describe('DoremixComponent', () => {
  let component: DoremixComponent;
  let fixture: ComponentFixture<DoremixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoremixComponent]
    });
    fixture = TestBed.createComponent(DoremixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
