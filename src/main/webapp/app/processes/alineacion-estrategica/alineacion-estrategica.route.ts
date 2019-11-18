import { Route } from '@angular/router';

import { AlineacionEstrategicaComponent } from './alineacion-estrategica.component';
import { DefAlineacionEstrategicaComponent } from './definiciones/def-alineacion-estrategica.component';
import { SistemaPlaneacionComponent } from './sistema-planeacion/sistema-planeacion.component';

export const ALINEACION_ESTRATEGICA_ROUTE: Route = {
    path: '1',
    children: [
        { path: 'definiciones', component: DefAlineacionEstrategicaComponent },
        { path: 'sps', component: SistemaPlaneacionComponent },
        { path: '', component: AlineacionEstrategicaComponent, pathMatch: 'full' }
    ],
    data: {
        pageTitle: 'processes.first'
    }
};
