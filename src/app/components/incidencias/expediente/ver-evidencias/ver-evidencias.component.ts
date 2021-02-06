import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Evidencia } from 'src/app/model/evidencia-model';
import { Expediente } from 'src/app/model/expediente-model';
import { saveAs } from 'file-saver';
import * as FileSaver from 'file-saver';
import { ExpedienteService } from 'src/app/services/expediente.service';

@Component({
  selector: 'app-ver-evidencias',
  templateUrl: './ver-evidencias.component.html',
  styleUrls: ['./ver-evidencias.component.css']
})
export class VerEvidenciasComponent implements OnInit {

  expedientes: Expediente;
  evidencias: Evidencia[];

  constructor(private sanitizer: DomSanitizer,private expedienteService: ExpedienteService) { }

  ngOnInit(): void {
    this.expedientes = JSON.parse(window.localStorage.getItem("EXPEDIENTE"));
    this.evidencias = this.expedientes.evidencias;
  }



  download(evidencia: Evidencia): void {
    const fileName = evidencia.name;
    this.expedienteService.getEvidencia(evidencia.id).subscribe(response => {
      //this.manageExcelFile(response, fileName);
      const binaryData = [];
      binaryData.push(response);
      let file = new Blob(binaryData, { type: evidencia.type });            
      var fileURL = URL.createObjectURL(file);
      //saveAs(fileURL,evidencia.name);
      window.open(fileURL);
    });
  }

  manageExcelFile(response: any, fileName: string): void {
    const dataType = response.type;
    const binaryData = [];
    binaryData.push(response);

    const filtePath = window.URL.createObjectURL(new Blob(binaryData, {type: dataType}));
    const downloadLink = document.createElement('a');
    downloadLink.href = filtePath;
    downloadLink.setAttribute('download', fileName);
    document.body.appendChild(downloadLink);
    downloadLink.click();
  }

}


