/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Lab12ApplyCssConditionallyComponent } from './lab-12-apply-css-conditionally.component';

describe('Lab12ApplyCssConditionallyComponent', () => {
  let component: Lab12ApplyCssConditionallyComponent;
  let fixture: ComponentFixture<Lab12ApplyCssConditionallyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lab12ApplyCssConditionallyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab12ApplyCssConditionallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
