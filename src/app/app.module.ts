import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './helpers/auth.interceptor';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { SpinnerInterceptorService } from './helpers/spinner-interceptor.service';
import { OverlayModule } from '@angular/cdk/overlay';
//Servicios

//Rutas
import { AppRoutingModule } from './app-routing.module';

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { IncidenciasComponent } from './components/incidencias/incidencias/incidencias.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas/estadisticas.component';

//LOgin
import { NewComponent } from './components/login/new/new/new.component';
import { ResetComponent } from './components/login/reset/reset/reset.component';
import { LoginComponent } from './components/login/login/login.component';

//USer
import { PreRegistroComponent } from './components/usuario/registro/preRegistro/pre-registro/pre-registro.component';
import { ActiRegistroComponent } from './components/usuario/registro/actiRegistro/acti-registro/acti-registro.component';
import { ProfileComponent } from './components/usuario/profile/profile/profile.component';

//Incidencias
import { AddTipoComponent } from './components/incidencias/tipoIncidencia/add-tipo/add-tipo.component';
import { RegistroIncidenciaComponent } from './components/incidencias/registro/registro-incidencia/registro-incidencia.component';
import { IncidenciaComponent } from './components/incidencias/ver/incidencia/incidencia.component';
import { ComentarioComponent } from './components/incidencias/comentario/comentario/comentario.component';
import { IncidenciCompletaComponent } from './components/incidencias/ver/incidenci-completa/incidenci-completa.component';
import { ExpedienteComponent } from './components/incidencias/expediente/expediente.component';
import { IncidenciaExpedienteComponent } from './components/incidencias/expediente/incidencia/incidencia.component';

//mapas
import { MapComponent } from './components/map/map/map.component';
import { MarkerComponent } from './components/map/marker/marker.component';
import { OpcionesComponent } from './components/map/opciones/opciones.component';
import { EvidenciaComponent } from './components/incidencias/evidencia/evidencia.component';
import { IncidenciCompletaPublicaComponent } from './components/incidencias/ver/incidenci-completa-publica/incidenci-completa-publica.component';
import { IncidenciaPublicaComponent } from './components/incidencias/ver/incidencia-publica/incidencia-publica.component';
import { SeguimientoComponent } from './components/incidencias/seguimiento/seguimiento.component';

//expediente
import { AgregarEvidenciasComponent } from './components/incidencias/expediente/agregar-evidencias/agregar-evidencias.component';
import { VerEvidenciasComponent } from './components/incidencias/expediente/ver-evidencias/ver-evidencias.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    IncidenciasComponent,
    EstadisticasComponent,
    NewComponent,
    ResetComponent,
    PreRegistroComponent,
    ActiRegistroComponent,
    ProfileComponent,
    AddTipoComponent,
    RegistroIncidenciaComponent,
    IncidenciaComponent,
    MapComponent,
    MarkerComponent,
    OpcionesComponent,
    ComentarioComponent,
    IncidenciCompletaComponent,
    FooterComponent,
    EvidenciaComponent,
    IncidenciCompletaPublicaComponent,
    IncidenciaPublicaComponent,
    SeguimientoComponent,
    ExpedienteComponent,
    IncidenciaExpedienteComponent,
    AgregarEvidenciasComponent,
    VerEvidenciasComponent
  ],
  imports: [
    OverlayModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },{
    provide: HTTP_INTERCEPTORS,
    useClass: SpinnerInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
