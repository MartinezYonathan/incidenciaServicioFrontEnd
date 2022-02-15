import { Component, OnInit } from '@angular/core';
import { Expediente } from 'src/app/model/expediente-model';
import { Seguimiento } from 'src/app/model/seguimiento-model';
import { SeguimientoService } from 'src/app/services/seguimiento.service';
import Swal from 'sweetalert2';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.component.html',
  styleUrls: ['./seguimiento.component.css']
})

export class SeguimientoComponent implements OnInit {
  subreddits: Array<Object> = [];
  displayViewAll: boolean;
  form: any = {};
  isSuccessful = false;
  username: string;
  tipoIncidencia: string;
  incidencias: any[];
  expediente: Expediente;
  seguimientos: Seguimiento[];

  constructor(private seguimientoService:SeguimientoService) {  }

  ngOnInit(): void { 
    this.username = sessionStorage.getItem('auth-user');
    this.expediente = JSON.parse(window.localStorage.getItem("EXPEDIENTE"));
    this.incidencias = this.expediente.incidencias;
    
    if (this.username) {
      this.getSeguimientoByExpediente();
    }
  }

  onSubmit(): void {
    this.form.expediente_id = this.expediente.id;
    const text = this.form.text;
    let title =  'Seguimiento agregado.'
    if (!(text.trim() == '')) {
      if (this.username) {
        if(this.expediente.administrador == null){
            title = 'Todavía no tienes administrador asignado pero se guardara como nota.!';
        }
        this.seguimientoService.expedienteSeguimiento(this.form).subscribe(
          (data) => {
            this.getSeguimientoByExpediente();
            this.form.text = ' ';
            Swal.fire({
              icon: 'success',
              title: title,
              showConfirmButton: false,
              timer: 4500,
              backdrop: `
              rgba(161,32,32,0.8)
              left top
              no-repeat
            `,
            });
          },
          (error) => {
            throwError(error);
          }
        );
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Tienes que iniciar sesión para comentar!',
        });
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Tienes agregar un comentario!',
      });
    }
  }

  private getSeguimientoByExpediente() {
    this.seguimientoService
      .getSeguimientoByExpediente(this.expediente.id)
      .subscribe(
        (data) => {
          this.seguimientos = data;
        },
        (error) => {
          throwError(error);
        }
      );
  }
}
