import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceManuallyComponent } from './invoice-manually.component';

describe('InvoiceManuallyComponent', () => {
  let component: InvoiceManuallyComponent;
  let fixture: ComponentFixture<InvoiceManuallyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvoiceManuallyComponent]
    });
    fixture = TestBed.createComponent(InvoiceManuallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
