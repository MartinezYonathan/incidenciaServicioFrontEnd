import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Comentario } from 'src/app/model/comentario-model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
  API_URL = environment.apiUrl;
  
  constructor(private http: HttpClient) {
    console.log('Servicio Comentario Funcionando');
  }
  getAllComentariosByIncidencia(incidenciaId: number): Observable<Comentario[]> {
    return this.http.get<Comentario[]>(this.API_URL + 'comments/by-incidencia/' + incidenciaId);
  }

  incidenciaComentario(comentario: Comentario): Observable<any> {
    return this.http.post<any>(this.API_URL + 'comments/', comentario);
  }

  deleteComentarioUser(id:number, username:String): Observable<any> {
    return this.http.post<any>(this.API_URL + 'comments/userdelete/', {id:id,userName:username});
  }

  getAllComentariosByUser(username: string) {
    return this.http.get<Comentario[]>(this.API_URL + 'comments/by-user/' + username);
  }
}
