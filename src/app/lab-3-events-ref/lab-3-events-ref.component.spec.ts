/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Lab3EventsRefComponent } from './lab-3-events-ref.component';

describe('Lab3EventsRefComponent', () => {
  let component: Lab3EventsRefComponent;
  let fixture: ComponentFixture<Lab3EventsRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lab3EventsRefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab3EventsRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
