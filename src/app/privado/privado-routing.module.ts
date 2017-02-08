import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrivadoComponent }     from './privado.component';

import { AuthGuard }           from '../_guard/auth-guard.service';

const AdminRoutes: Routes = [
  { path: 'privado',  component: PrivadoComponent, canActivate: [AuthGuard] }
];
@NgModule({
  imports: [
    RouterModule.forChild(AdminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PrivadoRoutingModule { }