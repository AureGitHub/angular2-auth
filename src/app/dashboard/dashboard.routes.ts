import { Route } from '@angular/router';


import { PrivadoRoutes } from './privado/privado-routing.module';

import { DashboardComponent } from './dashboard.component';

export const DashboardRoutes: Route[] = [
  	{
    	path: 'dashboard',
    	component: DashboardComponent,
    	children: [
	    	...PrivadoRoutes	    	
    	]
  	}
];
