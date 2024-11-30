import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletComponComponent } from './outlet-compon.component';

describe('OutletComponComponent', () => {
  let component: OutletComponComponent;
  let fixture: ComponentFixture<OutletComponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OutletComponComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutletComponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
