import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { Expediente } from 'src/app/model/expediente-model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ExpedienteService {
  API_URL = environment.apiUrl;

  constructor(private http: HttpClient) { 
    console.log('Servicio expediente Funcionando');
  }

  getAllExpedientesByUser(): Observable<Expediente[]> {
    return this.http.get<Expediente[]>(this.API_URL + 'expediente/usuario');
  }

}
