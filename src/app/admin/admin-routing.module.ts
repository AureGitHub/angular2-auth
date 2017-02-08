import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent }    from './admin.component';
import { AdminApuestaComponent }  from './admin-apuesta/admin-apuesta.component';
import { AdminGuard }           from './admin-guard.service';

const AdminRoutes: Routes = [
  { path: 'admin',  component: AdminComponent, canActivate: [AdminGuard] },
  { path: 'admin/apuesta', component: AdminApuestaComponent, canActivate: [AdminGuard] }
];
@NgModule({
  imports: [
    RouterModule.forChild(AdminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }