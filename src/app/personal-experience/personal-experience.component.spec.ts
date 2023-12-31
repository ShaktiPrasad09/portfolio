import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalExperienceComponent } from './personal-experience.component';

describe('PersonalExperienceComponent', () => {
  let component: PersonalExperienceComponent;
  let fixture: ComponentFixture<PersonalExperienceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalExperienceComponent]
    });
    fixture = TestBed.createComponent(PersonalExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
