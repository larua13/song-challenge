import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatequestionsComponent } from './templatequestions.component';

describe('TemplatequestionsComponent', () => {
  let component: TemplatequestionsComponent;
  let fixture: ComponentFixture<TemplatequestionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplatequestionsComponent]
    });
    fixture = TestBed.createComponent(TemplatequestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
