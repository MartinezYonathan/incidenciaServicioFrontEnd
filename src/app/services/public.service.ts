import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Ubicaciones } from 'src/app/model/ubicaciones-model';

const API_URL_PRODUC = 'http://localhost:8080/api/ubicacion/';
const API_URL = 'https://incidencias-servicio-backend.herokuapp.com/api/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PublicService {

  constructor(private http: HttpClient) {
    console.log('Servicio Publico');
  }

  getUbicacionIncidencias(): Observable<Array<Ubicaciones>> {
    return this.http.get<Array<Ubicaciones>>(API_URL + 'incidencias');
  }
}
