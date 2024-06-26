import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCreateModalComponent } from './dashboard-create-modal.component';

describe('DashboardCreateModalComponent', () => {
  let component: DashboardCreateModalComponent;
  let fixture: ComponentFixture<DashboardCreateModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardCreateModalComponent]
    });
    fixture = TestBed.createComponent(DashboardCreateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
