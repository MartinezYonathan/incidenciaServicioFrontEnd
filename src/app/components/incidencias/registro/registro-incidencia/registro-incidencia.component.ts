import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IncidenciaService } from 'src/app/services/incidencia.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-registro-incidencia',
  templateUrl: './registro-incidencia.component.html',
  styleUrls: ['./registro-incidencia.component.css']
})
export class RegistroIncidenciaComponent implements OnInit {

  constructor(private router: Router, private incidenciaService: IncidenciaService) { }

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  correo: string;
  map: any;
  tipoIncidencia: string;


  ngOnInit(): void {
    this.tipoIncidencia = this.getTIpoIncidencia().replace("_", " ");
  }

  onSubmit(): void {

    this.form.latitud = this.getLatitud();
    this.form.longitud = this.getLongitud();
    this.form.nivelRiesgo = "Alto";
    this.form.tipoAlarma = "WEB";
    this.form.tipoIncidencia = this.getTIpoIncidencia();

    Swal.fire({
      title: '¿Quieres que sea publica tu incidencia?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `SI`,
      denyButtonText: `NO`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.incidenciaService.register(this.form,true).subscribe(
          data => {

          },
          err => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: err.error.message + ", No se pudo registrar tu incidencia",
            })
          }
        );
        Swal.fire({
          icon: 'success',
          title: 'Tu incidencia sera pública pero no se publicara tus datos!',
          showConfirmButton: false,
          timer: 8000
        })
        this.router.navigateByUrl('profile');
      } else if (result.isDenied) {
        this.incidenciaService.register(this.form,false).subscribe(
          data => {

          },
          err => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: err.error.message + ", No se pudo registrar tu incidencia",
            })
          }
        );
        Swal.fire({
          icon: 'success',
          title: 'No se publicara tu incidencia y sera privada!',
          showConfirmButton: false,
          timer: 8000
        })
        this.router.navigateByUrl('profile');
      }
    })
  }

  public getTIpoIncidencia(): any {
    return JSON.parse(localStorage.getItem("TIPO-INCIDENCIA"));
  }
  public getLongitud(): any {
    return JSON.parse(localStorage.getItem("LONGITUD"));
  }
  public getLatitud(): any {
    return JSON.parse(localStorage.getItem("LATITUD"));
  }
}
