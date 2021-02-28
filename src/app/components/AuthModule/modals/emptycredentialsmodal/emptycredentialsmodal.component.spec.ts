import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptycredentialsmodalComponent } from './emptycredentialsmodal.component';

describe('EmptycredentialsmodalComponent', () => {
  let component: EmptycredentialsmodalComponent;
  let fixture: ComponentFixture<EmptycredentialsmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptycredentialsmodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptycredentialsmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
