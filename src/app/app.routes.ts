import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { RequisitosComponent } from './components/requisitos/requisitos.component';
import { PreguntasComponent } from './components/preguntas/preguntas.component';
import { MisionComponent } from './components/mision/mision.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AvisoprivacidadComponent } from './components/avisoprivacidad/avisoprivacidad.component';
import { PagoComponent } from './components/shared/pago/pago.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'inicio', component: InicioComponent },
    { path: 'mision', component: MisionComponent },
    { path: 'preguntas', component: PreguntasComponent },
    { path: 'requisitos', component: RequisitosComponent },
    { path: 'servicios', component: ServiciosComponent },
    { path: 'avisoprivacidad', component: AvisoprivacidadComponent },
    { path: 'pago', component: PagoComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash:true });

