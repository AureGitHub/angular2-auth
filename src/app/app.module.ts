import { NgModule }             from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { routes } from './app.routes';

import { AppComponent }          from './app.component';
import { PageNotFoundComponent }    from './not-found.component';
import { PageNotAuthComponent }    from './not-auth.component';

import { AuthService }      from './auth.service';

import { CanDeactivateGuard }       from './_guard/can-deactivate-guard.service';
import { AuthGuard }                from './_guard/auth-guard.service';
import { AdminGuard }                from './dashboard/admin/admin-guard.service';

import { HttpModule }    from '@angular/http'
import { LoginModule} from './login/login.module'
import { DashboardModule } from './dashboard/dashboard.module';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,    
    HttpModule,
    RouterModule.forRoot(routes),
    LoginModule,    
    DashboardModule
  ],
  declarations: [
    AppComponent,    
    PageNotFoundComponent,
    PageNotAuthComponent
    
  ],
  providers: [AuthService, AuthGuard,AdminGuard, CanDeactivateGuard ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }