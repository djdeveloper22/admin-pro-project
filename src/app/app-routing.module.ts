import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages/pages.routing';

import { NotPagesFoundComponent } from './not-pages-found/not-pages-found.component';
import { AuthRoutingModule } from './auth/auth.routing';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NotPagesFoundComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
