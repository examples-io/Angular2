/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Lab11CssInsideComponentsComponent } from './lab-11-css-inside-components.component';

describe('Lab11CssInsideComponentsComponent', () => {
  let component: Lab11CssInsideComponentsComponent;
  let fixture: ComponentFixture<Lab11CssInsideComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lab11CssInsideComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab11CssInsideComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
