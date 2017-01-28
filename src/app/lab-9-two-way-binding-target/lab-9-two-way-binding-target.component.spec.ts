/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Lab9TwoWayBindingTargetComponent } from './lab-9-two-way-binding-target.component';

describe('Lab9TwoWayBindingTargetComponent', () => {
  let component: Lab9TwoWayBindingTargetComponent;
  let fixture: ComponentFixture<Lab9TwoWayBindingTargetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lab9TwoWayBindingTargetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab9TwoWayBindingTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
