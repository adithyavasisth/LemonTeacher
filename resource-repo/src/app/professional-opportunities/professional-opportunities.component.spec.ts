import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalOpportunitiesComponent } from './professional-opportunities.component';

describe('ProfessionalOpportunitiesComponent', () => {
  let component: ProfessionalOpportunitiesComponent;
  let fixture: ComponentFixture<ProfessionalOpportunitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfessionalOpportunitiesComponent]
    });
    fixture = TestBed.createComponent(ProfessionalOpportunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
