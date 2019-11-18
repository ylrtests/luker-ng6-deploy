import { Route } from '@angular/router';

import { PlaneacionEstructuraComponent } from './planeacion-estructura.component';
import { DefPlaneacionEstructuraComponent } from './definiciones/def-planeacion-estructura.component';

export const PLANEACION_ESTRUCTURA_ROUTE: Route = {
    path: '2',
    children: [
        { path: 'definiciones', component: DefPlaneacionEstructuraComponent },
        { path: '', component: PlaneacionEstructuraComponent, pathMatch: 'full' }
    ],
    data: {
        pageTitle: 'processes.second'
    }
};
