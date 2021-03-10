import { Component, OnInit } from '@angular/core';
import { Expediente } from 'src/app/model/expediente-model';

@Component({
  selector: 'app-incidencia-expediente',
  templateUrl: './incidencia.component.html',
  styleUrls: ['./incidencia.component.css']
})
export class IncidenciaExpedienteComponent implements OnInit {
  
  incidencias: any[];
  incidenciasLength: number;
  expedientes: Expediente;

  constructor() { }

  ngOnInit(): void {
    this.expedientes = JSON.parse(window.localStorage.getItem("EXPEDIENTE"));
    this.incidencias = this.expedientes.incidencias;
  }

}
