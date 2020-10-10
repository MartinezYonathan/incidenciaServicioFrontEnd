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
export class AuthService {
  AUTH_API = environment.apiUrl;
  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post(this.AUTH_API + 'auth/login', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  ressetpass(credentials): Observable<any> {
    return this.http.post(this.AUTH_API + 'auth/resetpass', {
      email: credentials.email,
      newPassword: null
    }, httpOptions);
  }

  newpass(credentials): Observable<any> {
    return this.http.post(this.AUTH_API + 'auth/reset', {
      email: credentials.email,
      newPassword: credentials.newPassword
    }, httpOptions);
  }

  register(user): Observable<any> {
    return this.http.post(this.AUTH_API + 'auth/signup', {
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
