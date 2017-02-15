import { Route } from '@angular/router';
import { AuthGuard }    from '../../_guard/auth-guard.service';
import { PrivadoComponent }     from './privado.component';

export const PrivadoRoutes: Route[] = [
	{
		path: 'privado',
		component: PrivadoComponent, canActivate: [AuthGuard]
	},
];

