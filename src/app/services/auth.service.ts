import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API_PRODUC = 'http://localhost:8080/api/auth/';
const AUTH_API = 'https://incidencias-servicio-backend.herokuapp.com/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  ressetpass(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'resetpass', {
      email: credentials.email,
      newPassword: null
    }, httpOptions);
  }

  newpass(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'reset', {
      email: credentials.email,
      newPassword: credentials.newPassword
    }, httpOptions);
  }

  register(user): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username: null,
      email: user.email,
      password: null,
      nombre : null,
      matricula : null,
      carrera : null,
      plantel : null,
      turno : null,
      urlfoto : null
    }, httpOptions);
  }
}
