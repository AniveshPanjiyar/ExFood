import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthFormPage } from './health-form.page';

describe('HealthFormPage', () => {
  let component: HealthFormPage;
  let fixture: ComponentFixture<HealthFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
