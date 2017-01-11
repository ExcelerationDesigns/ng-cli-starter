import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './layout/not-found/not-found.component';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    loadChildren: 'app/pages/about-page/about-page.module#AboutPageModule',
    path: 'about',
  },
  {
    loadChildren: 'app/pages/home-page/home-page.module#HomePageModule',
    path: 'home',
  },
  {
    component: NotFoundComponent,
    path: '**',
  },
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(appRoutes)
  ]
})
export class AppRoutingModule { }
