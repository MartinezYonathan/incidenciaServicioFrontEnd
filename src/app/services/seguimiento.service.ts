import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Seguimiento } from 'src/app/model/seguimiento-model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SeguimientoService {
  API_URL = environment.apiUrl;

  constructor(private http: HttpClient) {
    console.log('Servicio Seguimiento Funcionando');
  }

  getSeguimientoByExpediente(expedienteId: number): Observable<Seguimiento[]> {
    return this.http.get<Seguimiento[]>(this.API_URL + 'seguimiento/by-expediente/' + expedienteId);
  }

  expedienteSeguimiento(seguimiento: Seguimiento): Observable<any> {
    return this.http.post<any>(this.API_URL + 'seguimiento/', seguimiento);
  }

  getAllComentariosByUser(username: string) {
    return this.http.get<Seguimiento[]>(this.API_URL + 'comments/by-user/' + username);
  }
}
