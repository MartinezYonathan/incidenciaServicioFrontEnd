import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { Incidencia } from 'src/app/model/incidencia-model';
import { Administradores } from 'src/app/model/administradores-model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  API_URL = environment.apiUrl;

  constructor(private http: HttpClient) {
    console.log('Servicio Incidencia admin');
  }

  getAllIncidenciasAdmin(): Observable<Array<Incidencia>> {
    return this.http.get<Array<Incidencia>>(this.API_URL + 'incidencia/admin/incidencias');
  }

  getAllAdmin(): Observable<Array<Administradores>> {
    return this.http.get<Array<Administradores>>(this.API_URL + 'usuario/root/getUserAdmin');
  }
}
