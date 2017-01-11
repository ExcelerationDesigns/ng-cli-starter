/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConstService } from './const.service';

describe('Service: Const', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConstService]
    });
  });

  it('should ...', inject([ConstService], (service: ConstService) => {
    expect(service).toBeTruthy();
  }));
});
