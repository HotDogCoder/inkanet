import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDetailWrapperComponent } from './service-detail-wrapper.component';

describe('ServiceDetailWrapperComponent', () => {
  let component: ServiceDetailWrapperComponent;
  let fixture: ComponentFixture<ServiceDetailWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceDetailWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceDetailWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
