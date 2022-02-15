import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Ubicaciones } from 'src/app/model/ubicaciones-model';
import { Incidencia } from 'src/app/model/incidencia-model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PublicService {
  API_URL = environment.apiUrl;

  constructor(private http: HttpClient) {
    console.log('Servicio Publico');
  }

  getUbicacionIncidencias(): Observable<Array<Ubicaciones>> {
    return this.http.get<Array<Ubicaciones>>(this.API_URL + 'public/incidencias/ubicaciones');
  }

  getIncidenciasPublicas(): Observable<Array<Incidencia>> {
    return this.http.get<Array<Incidencia>>(this.API_URL + 'public/incidencias');
  }
}
