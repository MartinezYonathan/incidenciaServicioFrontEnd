import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_URL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  register(user): Observable<any> {
    return this.http.post(this.API_URL + 'auth/usuario', {
      email: user.email,
      nombre: user.nombre,
      matricula: user.matricula,
      carrera: user.carrera,
      plantel: user.plantel,
      turno: user.turno,
      urlfoto: user.urlfoto
    }, httpOptions);
  }

  getPublicContent(): Observable<any> {
    return this.http.get(this.API_URL + 'test/all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(this.API_URL + 'test/user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(this.API_URL + 'test/mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(this.API_URL + 'test/admin', { responseType: 'text' });
  }
}
