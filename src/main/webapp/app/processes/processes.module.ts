import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PROCESSES_ROUTE } from './processes.route';

import { LukerSharedModule } from 'app/shared/shared.module';
import { ProcessesComponent } from './processes.component';
import { VinculacionIntegracionComponent } from './vinculacion-integracion/vinculacion-integracion.component';
import { VinculacionComponent } from './vinculacion-integracion/vinculacion/vinculacion.component';
import { IntegracionComponent } from './vinculacion-integracion/integracion/integracion.component';
import { DefVinculacionIntegracionComponent } from './vinculacion-integracion/definiciones/def-vinculacion-integracion.component';
import { AlineacionEstrategicaComponent } from './alineacion-estrategica/alineacion-estrategica.component';
import { DefAlineacionEstrategicaComponent } from './alineacion-estrategica/definiciones/def-alineacion-estrategica.component';
import { SistemaPlaneacionComponent } from './alineacion-estrategica/sistema-planeacion/sistema-planeacion.component';
import { PlaneacionEstructuraComponent } from './planeacion-estructura/planeacion-estructura.component';
import { DefPlaneacionEstructuraComponent } from './planeacion-estructura/definiciones/def-planeacion-estructura.component';
import { DesemDesarrolloComponent } from './desem-desarrollo/desem-desarrollo.component';
import { UniversidadLukerComponent } from './universidad-luker/universidad-luker.component';
import { DefDesemDesarrolloComponent } from './desem-desarrollo/definiciones/def-desem-desarrollo.component';
import { CompromisoReconoComponent } from './compromiso-recono/compromiso-recono.component';
import { DefCompromisoReconoComponent } from './compromiso-recono/definiciones/def-compromiso-recono.component';
import { CierreExitosoComponent } from './cierre-exitoso/cierre-exitoso.component';
import { DefCierreExitosoComponent } from './cierre-exitoso/definiciones/def-cierre-exitoso.component';

@NgModule({
    imports: [LukerSharedModule, RouterModule.forChild([PROCESSES_ROUTE])],
    declarations: [
        ProcessesComponent,
        VinculacionIntegracionComponent,
        VinculacionComponent,
        IntegracionComponent,
        DefVinculacionIntegracionComponent,
        AlineacionEstrategicaComponent,
        DefAlineacionEstrategicaComponent,
        SistemaPlaneacionComponent,
        PlaneacionEstructuraComponent,
        DefPlaneacionEstructuraComponent,
        DesemDesarrolloComponent,
        UniversidadLukerComponent,
        DefDesemDesarrolloComponent,
        CompromisoReconoComponent,
        DefCompromisoReconoComponent,
        CierreExitosoComponent,
        DefCierreExitosoComponent
    ]
})
export class LukerProcessesModule { }
