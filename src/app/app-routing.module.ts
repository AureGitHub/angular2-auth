import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { HomeComponent }     from './home/home.component';
import { PageNotFoundComponent }    from './not-found.component';
import { PageNotAuthComponent }    from './not-auth.component';
import { LoginComponent }     from './login/login.component';
import { AuthGuard }           from './_guard/auth-guard.service';
import { AdminGuard }           from './_guard/admin-guard.service';
import { PrivadoComponent }     from './privado/privado.component';
import { AdminComponent }     from './admin/admin.component';


const appRoutes: Routes = [  
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'login',     component: LoginComponent },
  { path: 'inicio', component: HomeComponent },
  { path: 'privado', component: PrivadoComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [AdminGuard] },
  { path: 'no-auth', component: PageNotAuthComponent },
   { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}