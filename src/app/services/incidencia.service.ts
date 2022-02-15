import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Incidencia } from 'src/app/model/incidencia-model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class IncidenciaService {
  API_URL = environment.apiUrl;

  constructor(private http: HttpClient) {
    console.log('Servicio Incidencia Funcionando');
  }

  register(incidencia, publica: boolean): Observable<any> {
    return this.http.post(this.API_URL + 'incidencia/', {
      descripcion: incidencia.descripcion,
      latitud: incidencia.latitud,
      longitud: incidencia.longitud,
      nivelRiesgo: incidencia.nivelRiesgo,
      tipoAlarma: incidencia.tipoAlarma,
      tipoIncidencia: incidencia.tipoIncidencia,
      titulo: incidencia.titulo,
      dateInicio: incidencia.dateInicio,
      dateTermino: incidencia.dateTermino,
      publico : publica
    }, httpOptions);
  }

  getIncidenciasByUser(): Observable<Array<Incidencia>> {
    return this.http.get<Array<Incidencia>>(this.API_URL + 'incidencia/incidencias-by-usuario');
  }

}
