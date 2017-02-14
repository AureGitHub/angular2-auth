import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { routes } from './app-routing.module';

import { AppComponent }          from './app.component';
import { HomeComponent }     from './home/home.component';
import { PageNotFoundComponent }    from './not-found.component';
import { PageNotAuthComponent }    from './not-auth.component';

import { AuthService }      from './auth.service';

import { CanDeactivateGuard }       from './_guard/can-deactivate-guard.service';
import { AuthGuard }                from './_guard/auth-guard.service';

import { HttpModule }    from '@angular/http'
import { LoginModule} from './login/login.module'
import { AdminModule} from './admin/admin.module'
import { DashboardModule } from './dashboard/dashboard.module';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,    
    HttpModule,
    RouterModule.forRoot(routes),
    LoginModule,
    AdminModule,
    DashboardModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    PageNotAuthComponent
    
  ],
  providers: [AuthService, AuthGuard, CanDeactivateGuard ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }