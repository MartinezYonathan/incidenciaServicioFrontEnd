import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Incidencia } from 'src/app/model/incidencia-model';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2'
import { Action } from 'rxjs/internal/scheduler/Action';
import { ExpedienteService } from 'src/app/services/expediente.service';
import { Expediente } from 'src/app/model/expediente-model';

@Component({
  selector: 'app-asignacion',
  templateUrl: './asignacion.component.html',
  styleUrls: ['./asignacion.component.css']
})
export class AsignacionComponent implements OnInit {

  constructor(
    private router: Router,
    private tokenService: TokenStorageService,
    private adminService: AdminService,
    private expedienteService: ExpedienteService
  ) {}
  expedientes: Expediente[] = [];
  username: string;
  totalDeOperaciones = this.expedientes.length;
  filtroExpediente: Expediente[] = [];
  currentPage = 1;
  numPerPage = 10;
  maxSize = 5;
  admin = {};

  ngOnInit(): void {
    this.username = this.tokenService.getUser();

    this.expedienteService.getAllExpedientesByROOT().subscribe(data => {
      this.expedientes = data;
      this.filtro();
      console.log(this.filtroExpediente);
    });
  }

  async goToIncidencia(incidencia: Incidencia) {
    this.admin = {"juan":"juan manuel", pepe:"pepe perez", toño:"toño lopez", erik:"erik martinez"};
    const { value: admin } = await Swal.fire({
      title: 'selecciona un administrador',
      input: 'select',
      inputOptions: this.admin,
      inputPlaceholder: 'Administradores',
      showCancelButton: true,
      inputValidator: (value) => {
        return new Promise((resolve) => {
            resolve("")
        })
      }
    })
    
    if (admin) {
      Swal.fire(`El administrador fue asignado a la incidencias ${incidencia.id}`)
    }
  }


  numPages() {
    if (this.expedientes != null && this.expedientes != undefined) {
      return Math.ceil((this.totalDeOperaciones) / this.numPerPage);
    }
    else {
      return 0;
    }
  };

  filtro() {
    var begin = ((this.currentPage - 1) * this.numPerPage),
      end = begin + this.numPerPage;
    this.filtroExpediente = this.expedientes.slice(begin, end);
  }

}
