/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Lab10ComponentsWithOutputComponent } from './lab-10-components-with-output.component';

describe('Lab10ComponentsWithOutputComponent', () => {
  let component: Lab10ComponentsWithOutputComponent;
  let fixture: ComponentFixture<Lab10ComponentsWithOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lab10ComponentsWithOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab10ComponentsWithOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
