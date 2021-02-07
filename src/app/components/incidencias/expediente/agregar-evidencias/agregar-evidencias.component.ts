import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Expediente } from 'src/app/model/expediente-model';
import { ExpedienteService } from 'src/app/services/expediente.service';

@Component({
  selector: 'app-agregar-evidencias',
  templateUrl: './agregar-evidencias.component.html',
  styleUrls: ['./agregar-evidencias.component.css'],
})
export class AgregarEvidenciasComponent implements OnInit {
  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  expedientes: Expediente;

  fileInfos?: Observable<any>;

  constructor(
    private expedienteService: ExpedienteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.expedientes = JSON.parse(window.localStorage.getItem('EXPEDIENTE'));
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }
  
  expediente() {
    this.router.navigateByUrl('profile');
  }

  evidencia() {
    this.router.navigateByUrl('evidencias');
  }

  incidencia() {
    this.router.navigateByUrl('incidenciasexpediente');
  }

  upload(): void {
    this.progress = 0;

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;

        this.expedienteService
          .upload(this.currentFile, this.expedientes.id)
          .subscribe(
            (event: any) => {
              if (event.type === HttpEventType.UploadProgress) {
                this.progress = Math.round((100 * event.loaded) / event.total);
              } else if (event instanceof HttpResponse) {
                this.message = event.body.message;
                this.fileInfos = this.expedienteService.getFiles();
              }
            },
            (err: any) => {
              console.log(err);
              this.progress = 0;

              if (err.error && err.error.message) {
                this.message = err.error.message;
              } else {
                this.message = 'Could not upload the file!';
              }

              this.currentFile = undefined;
            }
          );
      }

      this.selectedFiles = undefined;
    }
  }
}
