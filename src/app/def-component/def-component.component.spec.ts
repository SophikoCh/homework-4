import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefComponentComponent } from './def-component.component';

describe('DefComponentComponent', () => {
  let component: DefComponentComponent;
  let fixture: ComponentFixture<DefComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
