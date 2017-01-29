/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Lab10ComponentsWithOutputTargetComponent } from './lab-10-components-with-output-target.component';

describe('Lab10ComponentsWithOutputTargetComponent', () => {
  let component: Lab10ComponentsWithOutputTargetComponent;
  let fixture: ComponentFixture<Lab10ComponentsWithOutputTargetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lab10ComponentsWithOutputTargetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab10ComponentsWithOutputTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
