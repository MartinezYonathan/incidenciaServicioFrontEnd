import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Evidencia } from 'src/app/model/evidencia-model';
import { Expediente } from 'src/app/model/expediente-model';
import { saveAs } from 'file-saver';
import * as FileSaver from 'file-saver';
import { ExpedienteService } from 'src/app/services/expediente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-evidencias-admin',
  templateUrl: './ver-evidencias-admin.component.html',
  styleUrls: ['./ver-evidencias-admin.component.css']
})
export class VerEvidenciasAdminComponent implements OnInit {

  expedientes: Expediente;
  evidencias: Evidencia[];

  constructor(
    private sanitizer: DomSanitizer,
    private expedienteService: ExpedienteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.expedientes = JSON.parse(window.localStorage.getItem('EXPEDIENTE'));
    this.evidencias = this.expedientes.evidencias;
  }

  ver(evidencia: Evidencia): void {
    const fileName = evidencia.name;
    this.expedienteService.getEvidencia(evidencia.id).subscribe((response) => {
      //this.manageExcelFile(response, fileName);
      const binaryData = [];
      binaryData.push(response);
      let file = new Blob(binaryData, { type: evidencia.type });
      var fileURL = URL.createObjectURL(file);
      //saveAs(fileURL,evidencia.name);
      window.open(fileURL);
    });
  }

  expediente() {
    this.router.navigateByUrl('profile');
  }

  evidencia() {
    this.router.navigateByUrl('addevidencia');
  }

  incidencia() {
    this.router.navigateByUrl('incidenciasexpediente');
  }
}

