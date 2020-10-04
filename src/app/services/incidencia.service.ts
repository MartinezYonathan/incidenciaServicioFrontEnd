import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Incidencia } from 'src/app/model/incidencia-model';
const API_URL_PRODUC = 'http://localhost:8080/api/incidencia/';
const API_URL = 'https://incidencias-servicio-backend.herokuapp.com/api/incidencia/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class IncidenciaService {

  constructor(private http: HttpClient) {
    console.log('Servicio Incidencia Funcionando');
  }

  register(incidencia): Observable<any> {
    return this.http.post(API_URL, {
      descripcion: incidencia.descripcion,
      latitud: incidencia.latitud,
      longitud: incidencia.longitud,
      nivelRiesgo: incidencia.nivelRiesgo,
      tipoAlarma: incidencia.tipoAlarma,
      tipoIncidencia: incidencia.tipoIncidencia,
      titulo: incidencia.titulo,
      dateInicio: incidencia.dateInicio
    }, httpOptions);
  }
  
  getIncidenciasByUser(): Observable<Array<Incidencia>> {
    return this.http.get<Array<Incidencia>>(API_URL + 'incidencias-by-usuario');
  }

}
