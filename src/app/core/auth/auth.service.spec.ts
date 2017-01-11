/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';

import { FIREBASE_PROVIDERS, AngularFireModule } from 'angularfire2';

import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { ConstService } from './../utility/const.service';
import { RandomService } from './../utility/random.service';

describe('Service: Auth', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule
      ],
      providers: [
        RandomService,
        ConstService,
        AuthGuardService,
        AuthService,
        FIREBASE_PROVIDERS
      ]
    });
  });

  xit('should ...', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
