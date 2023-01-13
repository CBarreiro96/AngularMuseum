/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MovementService } from './movement.service';

describe('Service: Movement', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovementService]
    });
  });

  it('should ...', inject([MovementService], (service: MovementService) => {
    expect(service).toBeTruthy();
  }));
});
