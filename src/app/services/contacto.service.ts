import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Contacto } from 'src/app/model/contacto-model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  API_URL = environment.apiUrl;

  constructor(private http: HttpClient) { 
    console.log('Servicio Contacto Funcionando');
  }


  contactosGet(): Observable<Contacto[]> {
    return this.http.get<Contacto[]>(this.API_URL + 'contacto/');
  }

  contactosPost(contacto): Observable<any> {
    return this.http.post(this.API_URL + 'contacto/', {
      nombreCompleto: contacto.nombreCompleto,
      celular:contacto.celular,
      email: contacto.email,
      tipoAlarma:contacto.tipoAlarma,
      parentesco: contacto.parentesco
    }, httpOptions);
  }

  deleteComentario(id:number): Observable<any> {
    return this.http.delete<any>(this.API_URL + 'contacto/' + id);
  }
}
