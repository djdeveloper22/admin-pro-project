import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { NotPagesFoundComponent } from './not-pages-found/not-pages-found.component';
import { FormularioComponent } from './auth/formulario/formulario.component';
import { PagesRoutingModule } from './pages/pages.routing';

// rutas principales
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: FormularioComponent },
  { path: '**', component: NotPagesFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule,
    PagesRoutingModule
  ]
})
export class AppRoutingModule { }
