import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { HomeComponent }     from './home/home.component';
import { PageNotFoundComponent }    from './not-found.component';
import { LoginComponent }     from './login/login.component';
import { AuthGuard }           from './auth-guard.service';
import { PrivadoComponent }     from './privado/privado.component';


const appRoutes: Routes = [  
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'login',     component: LoginComponent },
  { path: 'inicio', component: HomeComponent },
  { path: 'privado', component: PrivadoComponent, canActivate: [AuthGuard] },
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