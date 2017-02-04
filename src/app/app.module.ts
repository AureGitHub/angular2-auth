import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }          from './app.component';
import { HomeComponent }     from './home/home.component';
import { PageNotFoundComponent }    from './not-found.component';
import { PageNotAuthComponent }    from './not-auth.component';
import { LoginComponent }     from './login/login.component';
import { AuthService }      from './auth.service';
import { PrivadoComponent }     from './privado/privado.component';
import { CanDeactivateGuard }       from './_guard/can-deactivate-guard.service';
import { AuthGuard }                from './_guard/auth-guard.service';
import { AdminGuard }                from './_guard/admin-guard.service';
import { HttpModule }    from '@angular/http';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    PageNotAuthComponent,
    LoginComponent,
    PrivadoComponent,
    AdminComponent
    
  ],
  providers: [AuthService, AuthGuard,AdminGuard, CanDeactivateGuard ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }