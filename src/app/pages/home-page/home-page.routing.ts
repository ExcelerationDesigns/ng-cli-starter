import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page.component';

const homePageRoutes: Routes = [
  {
    component: HomePageComponent,
    path: ''
  }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forChild(homePageRoutes)
  ]
})
export class HomePageRoutingModule { }
