import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LukerSharedModule } from 'app/shared';
import { HOME_ROUTE, HomeComponent } from './';
import { TalentoComponent } from './talento/talento.component';
import { LiderComponent } from './lider/lider.component';

@NgModule({
    imports: [LukerSharedModule, RouterModule.forChild([HOME_ROUTE])],
    declarations: [HomeComponent, TalentoComponent, LiderComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LukerHomeModule {}
