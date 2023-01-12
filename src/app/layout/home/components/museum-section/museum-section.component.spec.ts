/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MuseumSectionComponent } from './museum-section.component';

describe('MuseumSectionComponent', () => {
  let component: MuseumSectionComponent;
  let fixture: ComponentFixture<MuseumSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuseumSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseumSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
