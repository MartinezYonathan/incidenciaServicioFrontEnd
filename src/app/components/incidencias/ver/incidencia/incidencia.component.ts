import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Expediente } from 'src/app/model/expediente-model';
import { Incidencia } from 'src/app/model/incidencia-model';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-incidencia',
  templateUrl: './incidencia.component.html',
  styleUrls: ['./incidencia.component.css'],
})
export class IncidenciaComponent implements OnInit {
  constructor(
    private router: Router,
    private tokenService: TokenStorageService
  ) {}
  @Input() incidencias: any[];
  expedientes: Expediente;
  username: string;

  roles: string[];
  isLoggedIn = false;
  token: any;

  ngOnInit(): void {
    this.username = this.tokenService.getUser();
    this.expedientes = JSON.parse(window.localStorage.getItem("EXPEDIENTE"));
    this.incidencias = this.expedientes.incidencias;
    this.token = this.tokenService.getToken();
  }

  goToIncidencia(incidencia: Incidencia): void {
    window.localStorage.removeItem('INCIDENCIA');
    window.localStorage.setItem('INCIDENCIA', JSON.stringify(incidencia));
    this.router.navigateByUrl('miincidencia');
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
}
