import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormularioComponent } from './formulario/formulario.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: FormularioComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}

