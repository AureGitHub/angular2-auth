import { Route } from '@angular/router';


import { PrivadoRoutes } from './privado/privado.routes';
import { HomeRoutes } from './home/home.routes';
import { AdminRoutes } from './admin/admin.routes';

import { DashboardComponent } from './dashboard.component';
import { BSComponentRoutes } from './bs-component/index';
import { BSElementRoutes } from './bs-element/index';

export const DashboardRoutes: Route[] = [
	{		
    	path: '',
    	component: DashboardComponent,
    	children: [
			...HomeRoutes,
	    	...PrivadoRoutes,
			...AdminRoutes
	    	
    	]
  	},
  	{		
    	path: 'dashboard',
    	component: DashboardComponent,
    	children: [
			...HomeRoutes,
	    	...PrivadoRoutes,
			...AdminRoutes
	    	
    	]
  	}
];
