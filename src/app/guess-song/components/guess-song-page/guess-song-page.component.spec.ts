import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessSongPageComponent } from './guess-song-page.component';

describe('GuessSongPageComponent', () => {
  let component: GuessSongPageComponent;
  let fixture: ComponentFixture<GuessSongPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuessSongPageComponent]
    });
    fixture = TestBed.createComponent(GuessSongPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
