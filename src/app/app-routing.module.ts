
import { Routes } from '@angular/router';
import { HomeComponent }     from './home/home.component';
import { PageNotFoundComponent }    from './not-found.component';
import { PageNotAuthComponent }    from './not-auth.component';
import { AuthGuard }           from './_guard/auth-guard.service';
import { LoginRoutes } from './login/login-routing.module';
import { DashboardRoutes } from './dashboard/dashboard.routes';

export const routes: Routes = [   
	...LoginRoutes,
	//...SignupRoutes,
	...DashboardRoutes,		
	{ path: '**', component: HomeComponent }
];