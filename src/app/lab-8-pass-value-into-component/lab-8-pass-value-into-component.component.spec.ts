/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Lab8PassValueIntoComponentComponent } from './lab-8-pass-value-into-component.component';

describe('Lab8PassValueIntoComponentComponent', () => {
  let component: Lab8PassValueIntoComponentComponent;
  let fixture: ComponentFixture<Lab8PassValueIntoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lab8PassValueIntoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab8PassValueIntoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
