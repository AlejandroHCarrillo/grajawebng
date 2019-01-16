import { AsociadoComponent } from './components/asociados/asociado.component';
import { AuthGardService } from './services/auth-gard.service';
import { AsociadosComponent } from './components/asociados/asociados.component';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { RequisitosComponent } from './components/requisitos/requisitos.component';
import { PreguntasComponent } from './components/preguntas/preguntas.component';
import { MisionComponent } from './components/mision/mision.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AvisoprivacidadComponent } from './components/avisoprivacidad/avisoprivacidad.component';
import { PagoComponent } from './components/shared/pago/pago.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { RedContactosComponent } from './components/red-contactos/red-contactos.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'inicio', component: InicioComponent },
    { path: 'mision', component: MisionComponent },
    { path: 'preguntas', component: PreguntasComponent },
    { path: 'requisitos', component: RequisitosComponent },
    { path: 'servicios', component: ServiciosComponent },
    { path: 'avisoprivacidad', component: AvisoprivacidadComponent },
    { path: 'pago', component: PagoComponent },
    { path: 'cursos', component: CursosComponent },
    { path: 'redcontactos', component: RedContactosComponent},
    {   path : 'asociados', 
        component : AsociadosComponent, 
        canActivate: [ AuthGardService ] },
    {   path : 'asociado', 
        component : AsociadoComponent, 
        canActivate: [ AuthGardService ]  },
    {   path : 'asociado/:id', 
        component : AsociadoComponent, 
        canActivate: [ AuthGardService ]  },
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash:true });

