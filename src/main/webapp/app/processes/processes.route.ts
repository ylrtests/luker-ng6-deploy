import { Route } from '@angular/router';
import { VINCULACION_INTEGRACION_ROUTE } from './vinculacion-integracion/vinculacion-integracion.route';
import { ALINEACION_ESTRATEGICA_ROUTE } from './alineacion-estrategica/alineacion-estrategica.route';
import { PLANEACION_ESTRUCTURA_ROUTE } from './planeacion-estructura/planeacion-estructura.route';
import { DESEM_DESARROLLO_ROUTE } from './desem-desarrollo/desem-desarrollo.route';
import { COMPROMISO_RECONO_ROUTE } from './compromiso-recono/compromiso-recono.route';
import { CIERRE_EXITOSO_ROUTE } from './cierre-exitoso/cierre-exitoso.route';
import { UNIVERSIDAD_LUKER_ROUTE } from './universidad-luker/universidad-luker.route';
import { ProcessesComponent } from './processes.component';
import { TplContactoComponent } from '../shared/templates/tpl-contacto/tpl-contacto.component';

export const PROCESSES_ROUTE: Route = {
  path: 'proceso',
  component: ProcessesComponent,
  children: [
    ALINEACION_ESTRATEGICA_ROUTE,
    VINCULACION_INTEGRACION_ROUTE,
    PLANEACION_ESTRUCTURA_ROUTE,
    DESEM_DESARROLLO_ROUTE,
    COMPROMISO_RECONO_ROUTE,
    CIERRE_EXITOSO_ROUTE,
    UNIVERSIDAD_LUKER_ROUTE,
    {
      path: 'contacto',
      component: TplContactoComponent,
      pathMatch: 'full',
      data: {
        pageTitle: 'home.contact'
      }
    },
    {
      path: '',
      redirectTo: '3',
      pathMatch: 'full',
    }
  ],

  data: {
    authorities: [],
    pageTitle: 'home.title'
  }
};
