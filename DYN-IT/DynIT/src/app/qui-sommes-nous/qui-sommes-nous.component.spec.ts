import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QUISOMMESNOUSComponent } from './qui-sommes-nous.component';

describe('QUISOMMESNOUSComponent', () => {
  let component: QUISOMMESNOUSComponent;
  let fixture: ComponentFixture<QUISOMMESNOUSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QUISOMMESNOUSComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QUISOMMESNOUSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
