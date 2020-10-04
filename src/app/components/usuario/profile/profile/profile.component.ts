import { Component, OnInit } from '@angular/core';
import { IncidenciaService } from 'src/app/services/incidencia.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;
  token: any;
  incidencias: any[];
  incidenciasLength: number;
  
  constructor(private tokenService: TokenStorageService,
    private incidenciaService: IncidenciaService) { }

  ngOnInit(): void {
    this.username = this.tokenService.getUser();
    this.token = this.tokenService.getToken();
    this.roles = this.tokenService.getRoles();

    
    this.incidenciaService.getIncidenciasByUser().subscribe(data => {
      this.incidencias = data;
      this.incidenciasLength = data.length;
    });
  }

}
