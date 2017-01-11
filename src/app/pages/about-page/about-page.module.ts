import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from 'ng2-translate/ng2-translate';

import { AboutPageRoutingModule } from './about-page.routing';
import { AboutPageComponent } from './about-page.component';

@NgModule({
  declarations: [
    AboutPageComponent
  ],
  imports: [
    CommonModule,
    AboutPageRoutingModule,
    TranslateModule
  ]

})
export class AboutPageModule { }
