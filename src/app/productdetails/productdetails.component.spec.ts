import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductdetailesComponent } from './productdetails.component';

// import { ProductdetailsComponent } from './productdetails.component';

describe('ProductdetailsComponent', () => {
  let component: ProductdetailesComponent;
  let fixture: ComponentFixture<ProductdetailesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // declarations: [ ProductdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductdetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
