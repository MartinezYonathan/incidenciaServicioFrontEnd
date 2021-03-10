import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Expediente } from 'src/app/model/expediente-model';
import { ExpedienteService } from 'src/app/services/expediente.service';

@Component({
  selector: 'app-expediente',
  templateUrl: './expediente.component.html',
  styleUrls: ['./expediente.component.css'],
})
export class ExpedienteComponent implements OnInit {
  constructor(
    private expedienteService: ExpedienteService,
    private router: Router
  ) {}

  expedientes: Expediente[]  = [];

  ngOnInit(): void {
    this.expedienteService.getAllExpedientesByUser().subscribe((data) => {
      this.expedientes = data;
    });
  }

  goToIncidencia(expediente: Expediente): void {
    window.localStorage.removeItem('EXPEDIENTE');
    window.localStorage.setItem('EXPEDIENTE', JSON.stringify(expediente));
    this.router.navigateByUrl('incidenciasexpediente');
  }
}
