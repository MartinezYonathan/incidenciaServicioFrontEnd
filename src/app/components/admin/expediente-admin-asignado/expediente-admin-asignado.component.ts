import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Expediente } from 'src/app/model/expediente-model';
import { ExpedienteService } from 'src/app/services/expediente.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-expediente-admin-asignado',
  templateUrl: './expediente-admin-asignado.component.html',
  styleUrls: ['./expediente-admin-asignado.component.css']
})
export class ExpedienteAdminAsignadoComponent implements OnInit {

  constructor( private expedienteService: ExpedienteService,
    private router: Router,
    private tokenStorageService: TokenStorageService ) { }
 
  isLoggedIn = false;
  expedientes: Expediente[] = [];
  roles: string[];

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const rolesToken = this.tokenStorageService.getRoles();
      this.roles = rolesToken;
        if (this.roles.includes('ROLE_ADMIN')) {
            this.expedienteService.getExpedientesAsignadasADMIN().subscribe(data => {
            this.expedientes = data;            
          });
        }else{
          this.router.navigateByUrl('home');
        }
    }else{
      this.router.navigateByUrl('/login');
    }
  }

  goToIncidencia(expediente: Expediente): void {
    window.localStorage.removeItem('EXPEDIENTE');
    window.localStorage.setItem('EXPEDIENTE', JSON.stringify(expediente));
    this.router.navigateByUrl('verExpediente');
  }
}
