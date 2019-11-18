import { Route } from '@angular/router';

import { HomeComponent } from './';
import { TalentoComponent } from './talento/talento.component';
import { LiderComponent } from './lider/lider.component';

export const HOME_ROUTE: Route = {
    path: '',
    children: [
        { path: 'talento', component: TalentoComponent },
        { path: 'lider', component: LiderComponent },
        { path: '', component: HomeComponent, pathMatch: 'full' }
    ],
    data: {
        authorities: [],
        pageTitle: 'home.title'
    }
};
