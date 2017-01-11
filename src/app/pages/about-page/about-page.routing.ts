import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutPageComponent } from './about-page.component';

const aboutPageRoutes: Routes = [
  {
    component: AboutPageComponent,
    path: ''
  }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forChild(aboutPageRoutes)
  ]
})
export class AboutPageRoutingModule { }
