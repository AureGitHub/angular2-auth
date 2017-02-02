import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }          from './app.component';
import { HomeComponent }     from './home/home.component';
import { PageNotFoundComponent }    from './not-found.component';
import { LoginComponent }     from './login/login.component';
import { AuthService }      from './auth.service';
import { PrivadoComponent }     from './privado/privado.component';
import { CanDeactivateGuard }       from './can-deactivate-guard.service';
import { AuthGuard }                from './auth-guard.service';
import { HttpModule }    from '@angular/http';


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
    LoginComponent,
    PrivadoComponent
    
  ],
  providers: [AuthService, AuthGuard, CanDeactivateGuard ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }