import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FORMATIONETCERTIFICATIONComponent } from './formation-et-certification.component';

describe('FORMATIONETCERTIFICATIONComponent', () => {
  let component: FORMATIONETCERTIFICATIONComponent;
  let fixture: ComponentFixture<FORMATIONETCERTIFICATIONComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FORMATIONETCERTIFICATIONComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FORMATIONETCERTIFICATIONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
