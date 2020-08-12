import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
