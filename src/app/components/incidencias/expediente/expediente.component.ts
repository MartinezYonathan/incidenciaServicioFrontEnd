import { Component, OnInit } from '@angular/core';
import { PublicService } from 'src/app/services/public.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ExpedienteService } from 'src/app/services/expediente.service';
import { Expediente } from 'src/app/model/expediente-model';
import { Incidencia } from 'src/app/model/incidencia-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expediente',
  templateUrl: './expediente.component.html',
  styleUrls: ['./expediente.component.css']
})
export class ExpedienteComponent implements OnInit {

  constructor(private tokenService: TokenStorageService,
    private expedienteService: ExpedienteService,
    private router: Router) { }

    expedientes: Expediente[];
    expedientesLength: number;

  ngOnInit(): void {

    this.expedienteService.getAllExpedientesByUser().subscribe(data => {
      this.expedientes = data;
    });
  }

  goToIncidencia(expediente: Expediente): void {
    window.localStorage.removeItem('EXPEDIENTE');
    window.localStorage.setItem('EXPEDIENTE', JSON.stringify(expediente));
    this.router.navigateByUrl('incidenciasexpediente');
  }
}
