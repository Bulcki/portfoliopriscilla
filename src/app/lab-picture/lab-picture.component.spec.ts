import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabPictureComponent } from './lab-picture.component';

describe('LabPictureComponent', () => {
  let component: LabPictureComponent;
  let fixture: ComponentFixture<LabPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabPictureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
