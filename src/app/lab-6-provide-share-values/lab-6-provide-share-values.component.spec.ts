/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Lab6ProvideShareValuesComponent } from './lab-6-provide-share-values.component';

describe('Lab6ProvideShareValuesComponent', () => {
  let component: Lab6ProvideShareValuesComponent;
  let fixture: ComponentFixture<Lab6ProvideShareValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lab6ProvideShareValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab6ProvideShareValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
