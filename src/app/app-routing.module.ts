import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { HomeComponent }     from './home/home.component';
import { PageNotFoundComponent }    from './not-found.component';
import { PageNotAuthComponent }    from './not-auth.component';
import { AuthGuard }           from './_guard/auth-guard.service';

import { PrivadoComponent }     from './privado/privado.component';



const appRoutes: Routes = [  
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },  
  { path: 'inicio', component: HomeComponent },  
  { path: 'no-auth', component: PageNotAuthComponent },
 
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