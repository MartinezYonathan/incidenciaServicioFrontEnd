import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Expediente } from 'src/app/model/expediente-model';
import { Incidencia } from 'src/app/model/incidencia-model';
import { ExpedienteService } from 'src/app/services/expediente.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-ver-expediente',
  templateUrl: './ver-expediente.component.html',
  styleUrls: ['./ver-expediente.component.css']
})
export class VerExpedienteComponent implements OnInit {
  constructor(
    private router: Router,
    private tokenService: TokenStorageService,
    private expedienteService: ExpedienteService,
  ) {}
  @Input() incidencias: any[];
  expediente: Expediente;
  username: string;
  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  fileInfos?: Observable<any>;
  roles: string[];
  isLoggedIn = false;
  token: any;

  ngOnInit(): void {
    this.username = this.tokenService.getUser();
    this.expediente = JSON.parse(window.localStorage.getItem("EXPEDIENTE"));
    this.incidencias = this.expediente.incidencias;
    this.token = this.tokenService.getToken();
  }

  goToIncidencia(incidencia: Incidencia): void {
    Swal.fire({
      title: '<strong>' + incidencia.titulo + ' </strong>',
      icon: 'info',
      html:
      '<strong> FECHA: </strong>' +
      '<span> ' + this.dateForm(incidencia.dateInicio)+ ' </span>  ' +
      ' <br />  ' +
      '<strong> NIVEL DE RIESGO: </strong>' +
      '<span> ' + incidencia.nivelRiesgo+ ' </span>  '  +
      ' <br />  ' +
      '<strong> DESCRIPCION: </strong>' +
      '<span> ' + incidencia.descripcion+ ' </span>  '
      ,
      showCloseButton: true,
    })
    window.localStorage.removeItem('INCIDENCIA');
    window.localStorage.setItem('INCIDENCIA', JSON.stringify(incidencia));
   // this.router.navigateByUrl('miincidencia');
  }

  dateForm(time){
    var date = new Date(time);
    return date.toLocaleString()
  }

  goToViewEvidencia(){
    this.expedienteService.getExpedienteById(this.expediente.id).subscribe(data => {
    
      window.localStorage.removeItem('EXPEDIENTE');
      window.localStorage.setItem('EXPEDIENTE', JSON.stringify(data));           
    });

    this.router.navigateByUrl('verEvidenciasExpediente');
  }

  async goToCambioEstatus(){
    const { value: eststusSelect } = await Swal.fire({
      title: 'SELECCIONA EL ESTADO VALIDO',
      input: 'select',
      inputOptions: {
        'REGISTRADA': 'REGISTRADA',
        'ASIGNADA': 'ASIGNADA',
        'REVISION': 'REVISIÓN',
        'EN_PROCESO': 'EN_PROCESO',
        'FINALIZADO': 'FINALIZADO',
      },
      inputPlaceholder: 'Selecciona el estatus',
      showCancelButton: true,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (value === this.expediente.status) {
            resolve('No se puede seleccionar el mismo :(')
          } else {
            this.expedienteService.cambioEstatusADMIN(this.expediente.id,value).subscribe(data => {
              this.expediente = data;
              this.incidencias = this.expediente.incidencias;
              window.localStorage.removeItem('EXPEDIENT');
              window.localStorage.setItem('EXPEDIENTE', JSON.stringify(data));        
            });
            resolve("")
          }
        })
      }
    })
    if (eststusSelect) {
      Swal.fire(`Nuevo estatus: ${eststusSelect}`)
    }
  }

  async goToCreateEvidencia() {
    const { value: file } = await Swal.fire({
      allowOutsideClick: false,
      title: 'Seleccione el archivo',
      input: 'file',
      inputAttributes: {
        'accept': 'image/*',
        'aria-label': 'Upload your profile file'
      }
    })
    
    
      if (file) {
        this.currentFile = file;

        this.expedienteService
          .upload(this.currentFile, this.expediente.id)
          .subscribe((data) => {
            
            },
            (err: any) => {
              console.log(err);
              this.progress = 0;

              if (err.error && err.error.message) {
                this.message = err.error.message;
              } else {
                this.message = 'Could not upload the file!';
              }
              Swal.fire({
                icon: 'error',
                title: this.message,
                showConfirmButton: false,
                timer: 3500
              })
              this.currentFile = undefined;
            }
          );
             
        Swal.fire({
          icon: 'success',
          title: 'El archivo se subio correctamente!!',
          showConfirmButton: false,
          timer: 5500
        })
      }
      else{
        Swal.fire({
          icon: 'error',
          title: 'El archivo fallo!!',
          showConfirmButton: false,
          timer: 3500
        })
      this.selectedFiles = undefined;
}
    //this.router.navigateByUrl('evidencias');
  }

  incidencia() {
    this.router.navigateByUrl('incidenciasexpediente');
  }
}
