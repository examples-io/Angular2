/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Lab12ApplyCssConditionallyTargetComponent } from './lab-12-apply-css-conditionally-target.component';

describe('Lab12ApplyCssConditionallyTargetComponent', () => {
  let component: Lab12ApplyCssConditionallyTargetComponent;
  let fixture: ComponentFixture<Lab12ApplyCssConditionallyTargetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lab12ApplyCssConditionallyTargetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab12ApplyCssConditionallyTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
