import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginfailuremodalComponent } from './loginfailuremodal.component';

describe('LoginfailuremodalComponent', () => {
  let component: LoginfailuremodalComponent;
  let fixture: ComponentFixture<LoginfailuremodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginfailuremodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginfailuremodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
