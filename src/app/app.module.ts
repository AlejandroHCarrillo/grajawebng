import { Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTING } from "./app.routes";

// Servicios
// import { AsociadosService } from './services/asociados.service';
import { AuthService } from './services/auth.service';
import { AuthGardService } from './services/auth-gard.service';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { MisionComponent } from './components/mision/mision.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { RequisitosComponent } from './components/requisitos/requisitos.component';
import { PreguntasComponent } from './components/preguntas/preguntas.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AvisoprivacidadComponent } from './components/avisoprivacidad/avisoprivacidad.component';
import { PagoComponent } from './components/shared/pago/pago.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { RedContactosComponent } from './components/red-contactos/red-contactos.component';
import { AsociadosComponent } from './components/asociados/asociados.component';
import { AsociadoComponent } from './components/asociados/asociado.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MisionComponent,
    ServiciosComponent,
    RequisitosComponent,
    PreguntasComponent,
    InicioComponent,
    AvisoprivacidadComponent,
    PagoComponent,
    CursosComponent,
    RedContactosComponent,
    AsociadosComponent,
    AsociadoComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule
  ],
  providers: [
    AuthService, 
    AuthGardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
