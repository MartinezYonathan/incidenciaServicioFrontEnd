import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-incidencia',
  templateUrl: './incidencia.component.html',
  styleUrls: ['./incidencia.component.css']
})
export class IncidenciaComponent implements OnInit {

  constructor(private router: Router, private tokenService: TokenStorageService) { }
  @Input() incidencias: any[];
  username: string;

  ngOnInit(): void {
    this.username = this.tokenService.getUser();
  }

  goToIncidencia(id: number): void {
    this.router.navigateByUrl('home');
  }
}
