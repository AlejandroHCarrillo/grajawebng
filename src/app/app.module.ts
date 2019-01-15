import { Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTING } from "./app.routes";

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
    PagoComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
