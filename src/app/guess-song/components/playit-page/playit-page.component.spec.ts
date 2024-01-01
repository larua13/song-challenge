import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayitPageComponent } from './playit-page.component';

describe('PlayitPageComponent', () => {
  let component: PlayitPageComponent;
  let fixture: ComponentFixture<PlayitPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayitPageComponent]
    });
    fixture = TestBed.createComponent(PlayitPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
