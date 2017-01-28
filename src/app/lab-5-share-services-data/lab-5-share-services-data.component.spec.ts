/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Lab5ShareServicesDataComponent } from './lab-5-share-services-data.component';

describe('Lab5ShareServicesDataComponent', () => {
  let component: Lab5ShareServicesDataComponent;
  let fixture: ComponentFixture<Lab5ShareServicesDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lab5ShareServicesDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab5ShareServicesDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
