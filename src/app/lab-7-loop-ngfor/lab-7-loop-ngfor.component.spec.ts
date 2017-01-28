/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Lab7LoopNgforComponent } from './lab-7-loop-ngfor.component';

describe('Lab7LoopNgforComponent', () => {
  let component: Lab7LoopNgforComponent;
  let fixture: ComponentFixture<Lab7LoopNgforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lab7LoopNgforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab7LoopNgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
