import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

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
import { PrivadoModule} from './privado/privado.module'



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    LoginModule,
    AdminModule,
    PrivadoModule
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