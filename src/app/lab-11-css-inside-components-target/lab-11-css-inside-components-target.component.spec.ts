/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Lab11CssInsideComponentsTargetComponent } from './lab-11-css-inside-components-target.component';

describe('Lab11CssInsideComponentsTargetComponent', () => {
  let component: Lab11CssInsideComponentsTargetComponent;
  let fixture: ComponentFixture<Lab11CssInsideComponentsTargetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lab11CssInsideComponentsTargetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab11CssInsideComponentsTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
