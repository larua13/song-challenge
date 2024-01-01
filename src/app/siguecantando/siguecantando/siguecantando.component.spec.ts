import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiguecantandoComponent } from './siguecantando.component';

describe('SiguecantandoComponent', () => {
  let component: SiguecantandoComponent;
  let fixture: ComponentFixture<SiguecantandoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SiguecantandoComponent]
    });
    fixture = TestBed.createComponent(SiguecantandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
