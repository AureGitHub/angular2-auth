
import { Routes } from '@angular/router';
import { PageNotFoundComponent }    from './not-found.component';
import { PageNotAuthComponent }    from './not-auth.component';
import { LoginRoutes } from './login/login.routes';
import { DashboardRoutes } from './dashboard/dashboard.routes';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [   
	...LoginRoutes,
	//...SignupRoutes,
	...DashboardRoutes,		
	{ path: 'no-auth', component: PageNotAuthComponent },
	{ path: '**', component: DashboardComponent },
	
];