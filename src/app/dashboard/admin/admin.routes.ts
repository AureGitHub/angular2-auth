import { Route } from '@angular/router';
import { AdminComponent }    from './admin.component';
import { AdminGuard }           from './admin-guard.service';

export const AdminRoutes: Route[] = [
	{
		path: 'admin',
		component: AdminComponent, canActivate: [AdminGuard]
	},
];