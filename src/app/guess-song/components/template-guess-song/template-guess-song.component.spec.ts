import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateGuessSongComponent } from './template-guess-song.component';

describe('TemplateGuessSongComponent', () => {
  let component: TemplateGuessSongComponent;
  let fixture: ComponentFixture<TemplateGuessSongComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateGuessSongComponent]
    });
    fixture = TestBed.createComponent(TemplateGuessSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
