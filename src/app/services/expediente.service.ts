import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Expediente } from 'src/app/model/expediente-model';
import { environment } from '../../environments/environment.prod';


const httpOptions = {
  headers: new HttpHeaders({ 'responseType'  : 'arraybuffer' as 'json' })
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

  upload(file: File,expedienteId: number): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.API_URL}evidencia/upload/`+ expedienteId, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${this.API_URL}evidencia/files`);
  }

  getFilesById(id: number): Observable<any> {
    return this.http.get(`${this.API_URL}evidencia/files/`);
  }

  getEvidencia(id: number) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get(this.API_URL + 'evidencia/files/' + id, { headers, responseType: 'blob' as 'json'});
  }

}
