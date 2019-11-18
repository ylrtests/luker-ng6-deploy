import { Route } from '@angular/router';

import { UniversidadLukerComponent } from './universidad-luker.component';

export const UNIVERSIDAD_LUKER_ROUTE: Route = {
    path: 'universidad',
    component: UniversidadLukerComponent,
    pathMatch: 'full',
    data: {
        pageTitle: 'processes.university'
    }
};
