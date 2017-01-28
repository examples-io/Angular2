/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Lab8PassValueIntoComponentTargetComponent } from './lab-8-pass-value-into-component-target.component';

describe('Lab8PassValueIntoComponentTargetComponent', () => {
  let component: Lab8PassValueIntoComponentTargetComponent;
  let fixture: ComponentFixture<Lab8PassValueIntoComponentTargetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lab8PassValueIntoComponentTargetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab8PassValueIntoComponentTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
