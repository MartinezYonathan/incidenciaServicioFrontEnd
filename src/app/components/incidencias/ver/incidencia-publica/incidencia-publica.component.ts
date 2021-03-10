import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Incidencia } from 'src/app/model/incidencia-model';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-incidencia-publica',
  templateUrl: './incidencia-publica.component.html',
  styleUrls: ['./incidencia-publica.component.css'],
})
export class IncidenciaPublicaComponent implements OnInit {
  constructor(
    private router: Router,
    private tokenService: TokenStorageService
  ) {}
  @Input() incidencias: any[] = [];
  username: string;
  
  ngOnInit(): void {
    this.username = this.tokenService.getUser();
  }

  goToIncidencia(incidencia: Incidencia): void {
    window.localStorage.removeItem('INCIDENCIA');
    window.localStorage.setItem('INCIDENCIA', JSON.stringify(incidencia));
    this.router.navigateByUrl('incidencia');
  }

}
