import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { Incidencia } from 'src/app/model/incidencia-model';
import { Comentario } from 'src/app/model/comentario-model';
import { ComentarioService } from 'src/app/services/comentario.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-incidenci-completa',
  templateUrl: './incidenci-completa.component.html',
  styleUrls: ['./incidenci-completa.component.css']
})
export class IncidenciCompletaComponent implements OnInit {
  incidencia: Incidencia;
  comments: Comentario[];
  form: any = {};
  isSuccessful = false;
  username: string;

  constructor(private comentarioService: ComentarioService) { }

  ngOnInit(): void {
    this.username = sessionStorage.getItem('auth-user');
    this.incidencia = this.getIncidencia();
    if (this.username) {
      this.getCometariosByIncidencia();
    }
  }

  public getIncidencia(): Incidencia {
    return JSON.parse(localStorage.getItem("INCIDENCIA"));
  }

  onSubmit(): void {
    this.form.incidencia_id = this.incidencia.id;
    const text = this.form.text;
    if (!(text.trim() == "")) {
      if (this.username) {
        this.comentarioService.incidenciaComentario(this.form).subscribe(data => {
          this.getCometariosByIncidencia();
          this.form.text = " ";
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'comentario agregado.',
            showConfirmButton: false,
            timer: 1500,
            backdrop: `
              rgba(0,0,123,0.4)
              left top
              no-repeat
            `
          })
        }, error => {
          throwError(error);
        })
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Tienes que iniciar sesión para comentar!'
        })
      }
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Tienes agregar un comentario!'
      })
    }

  }

  private getCometariosByIncidencia() {
    this.comentarioService.getAllComentariosByIncidencia(this.incidencia.id).subscribe(data => {
      this.comments = data;
    }, error => {
      throwError(error);
    });
  }
}
