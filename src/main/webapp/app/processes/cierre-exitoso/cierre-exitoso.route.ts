import { Route } from '@angular/router';

import { CierreExitosoComponent } from './cierre-exitoso.component';
import { DefCierreExitosoComponent } from './definiciones/def-cierre-exitoso.component';

export const CIERRE_EXITOSO_ROUTE: Route = {
    path: '6',
    children: [
        { path: 'definiciones', component: DefCierreExitosoComponent },
        { path: '', component: CierreExitosoComponent, pathMatch: 'full' }
    ],
    data: {
        pageTitle: 'processes.sixth'
    }
};
