/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';

import { AuthProviders, AngularFireAuth, FirebaseAuthState } from 'angularfire2';

import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { ConstService } from './../utility/const.service';
import { RandomService } from './../utility/random.service';

const fbAuthMethods = [
  'subscribe'
  // ... etc
];

describe('Service: AuthGuard', () => {
  let mockFirebaseAuth;

  beforeEach(() => {

    mockFirebaseAuth = jasmine.createSpyObj('fbAuth', fbAuthMethods);

    TestBed.configureTestingModule({
      imports: [

      ],
      providers: [
        RandomService,
        ConstService,
        AuthGuardService,
        AuthService,
        { provide: AngularFireAuth, useValue: mockFirebaseAuth }
      ]
    });
  });

  xit('should ...', inject([AuthGuardService], (service: AuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
