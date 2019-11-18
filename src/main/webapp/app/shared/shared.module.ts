import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { LukerSharedLibsModule, LukerSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';
import { MapLukerComponent } from './map-luker/map-luker.component';
import { UniversidadLogoComponent } from './universidad-logo/universidad-logo.component';
import { TplDefinicionesComponent } from './templates/tpl-definiciones/tpl-definiciones.component';
import { TplCajaHerramientasComponent } from './templates/tpl-caja-herramientas/tpl-caja-herramientas.component';
import { TplContactoComponent } from './templates/tpl-contacto/tpl-contacto.component';

@NgModule({
    imports: [LukerSharedLibsModule, LukerSharedCommonModule],
    declarations: [
        JhiLoginModalComponent,
        HasAnyAuthorityDirective,
        MapLukerComponent,
        UniversidadLogoComponent,
        TplDefinicionesComponent,
        TplCajaHerramientasComponent,
        TplContactoComponent
    ],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    entryComponents: [JhiLoginModalComponent],
    exports: [
        LukerSharedCommonModule,
        JhiLoginModalComponent,
        HasAnyAuthorityDirective,
        MapLukerComponent,
        UniversidadLogoComponent,
        TplDefinicionesComponent,
        TplCajaHerramientasComponent,
        TplContactoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LukerSharedModule { }
