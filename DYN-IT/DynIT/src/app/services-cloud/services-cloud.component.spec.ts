import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SERVICESCLOUDComponent } from './services-cloud.component';

describe('SERVICESCLOUDComponent', () => {
  let component: SERVICESCLOUDComponent;
  let fixture: ComponentFixture<SERVICESCLOUDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SERVICESCLOUDComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SERVICESCLOUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
