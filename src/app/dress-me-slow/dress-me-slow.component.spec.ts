import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DressMeSlowComponent } from './dress-me-slow.component';

describe('DressMeSlowComponent', () => {
  let component: DressMeSlowComponent;
  let fixture: ComponentFixture<DressMeSlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DressMeSlowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DressMeSlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
