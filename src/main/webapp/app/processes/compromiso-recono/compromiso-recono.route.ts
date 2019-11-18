import { Route } from '@angular/router';

import { CompromisoReconoComponent } from './compromiso-recono.component';
import { DefCompromisoReconoComponent } from './definiciones/def-compromiso-recono.component';

export const COMPROMISO_RECONO_ROUTE: Route = {
    path: '5',
    children: [
        { path: 'definiciones', component: DefCompromisoReconoComponent },
        { path: '', component: CompromisoReconoComponent, pathMatch: 'full' }
    ],
    data: {
        pageTitle: 'processes.fifth'
    }
};
