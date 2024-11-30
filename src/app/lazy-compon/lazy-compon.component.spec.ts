import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyComponComponent } from './lazy-compon.component';

describe('LazyComponComponent', () => {
  let component: LazyComponComponent;
  let fixture: ComponentFixture<LazyComponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LazyComponComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyComponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
