/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MovementListComponent } from './movement-list.component';

describe('MovementListComponent', () => {
  let component: MovementListComponent;
  let fixture: ComponentFixture<MovementListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovementListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
