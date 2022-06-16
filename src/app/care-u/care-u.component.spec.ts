import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareUComponent } from './care-u.component';

describe('CareUComponent', () => {
  let component: CareUComponent;
  let fixture: ComponentFixture<CareUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
