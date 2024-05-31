import { ComponentFixture, TestBed } from '@angular/core/testing';

import { COLLABORATIONDIGITALEComponent } from './collaboration-digitale.component';

describe('COLLABORATIONDIGITALEComponent', () => {
  let component: COLLABORATIONDIGITALEComponent;
  let fixture: ComponentFixture<COLLABORATIONDIGITALEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [COLLABORATIONDIGITALEComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(COLLABORATIONDIGITALEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
