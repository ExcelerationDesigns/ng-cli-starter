import './../rxjs-extensions';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from 'ng2-translate/ng2-translate';
import { SharedModule } from '../shared/shared.module';

import { ConstService } from './utility/const.service';

import { RandomService } from './utility/random.service';

import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';

@NgModule({
  declarations: [

  ],
  exports:  [
  ],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    SharedModule
  ],
  providers: [
    RandomService,
    ConstService,
    AuthGuardService,
    AuthService
  ]
})
export class CoreModule { }
