import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './helpers/auth.guard';
///Components
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";

import { LoginComponent } from './components/login/login/login.component';
import { IncidenciasComponent } from './components/incidencias/incidencias/incidencias.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas/estadisticas.component';

///Components/login
import { NewComponent } from './components/login/new/new/new.component';
import { ResetComponent } from './components/login/reset/reset/reset.component';

///Components/Usuario
import { PreRegistroComponent } from './components/usuario/registro/preRegistro/pre-registro/pre-registro.component';
import { ActiRegistroComponent } from './components/usuario/registro/actiRegistro/acti-registro/acti-registro.component';
import { ProfileComponent } from './components/usuario/profile/profile/profile.component';

//Incidencias
import { AddTipoComponent } from './components/incidencias/tipoIncidencia/add-tipo/add-tipo.component';
import { RegistroIncidenciaComponent } from './components/incidencias/registro/registro-incidencia/registro-incidencia.component';
import { IncidenciCompletaComponent } from './components/incidencias/ver/incidenci-completa/incidenci-completa.component';
import { IncidenciCompletaPublicaComponent } from './components/incidencias/ver/incidenci-completa-publica/incidenci-completa-publica.component';
import { IncidenciaPublicaComponent } from './components/incidencias/ver/incidencia-publica/incidencia-publica.component';
import { IncidenciaExpedienteComponent } from './components/incidencias/expediente/incidencia/incidencia.component';

//expediente
import { AgregarEvidenciasComponent } from './components/incidencias/expediente/agregar-evidencias/agregar-evidencias.component';
import { VerEvidenciasComponent } from './components/incidencias/expediente/ver-evidencias/ver-evidencias.component';

//contacto
import { ContactoComponent } from './components/incidencias/contacto/contacto.component';
import { VerContactoComponent } from './components/incidencias/contacto/ver-contacto/ver-contacto.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'addevidencia', component: AgregarEvidenciasComponent },
  { path: 'evidencias', component: VerEvidenciasComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'contacto', component: VerContactoComponent },
  { path: 'contacto/registro', component: ContactoComponent },
  { path: 'registro', component: PreRegistroComponent },
  { path: 'registro/activar', component: ActiRegistroComponent },
  { path: 'newpass', component: NewComponent },
  { path: 'login/reset', component: ResetComponent },
  { path: 'incidencias', component: IncidenciasComponent },
  { path: 'incidenciasexpediente', component: IncidenciaExpedienteComponent },
  { path: 'incidencia', component: IncidenciCompletaPublicaComponent },
  { path: 'miincidencia', component: IncidenciCompletaComponent },
  { path: 'estadisticas', component: EstadisticasComponent },
  { path: 'about', component: AboutComponent },
  { path: 'incidencias/tipo', component: AddTipoComponent, canActivate: [AuthGuard]  },
  { path: 'incidencias/registro', component: RegistroIncidenciaComponent, canActivate: [AuthGuard]  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
