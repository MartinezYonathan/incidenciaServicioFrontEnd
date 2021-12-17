import { Component, OnInit } from '@angular/core';
import { ContactoService } from 'src/app/services/contacto.service';
import { throwError } from 'rxjs';
import { Contacto } from 'src/app/model/contacto-model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-ver-contacto',
  templateUrl: './ver-contacto.component.html',
  styleUrls: ['./ver-contacto.component.css']
})
export class VerContactoComponent implements OnInit {

  contactos: Contacto[]  = [];

  constructor(private contactoService: ContactoService, private router: Router) { }

  ngOnInit(): void {

    this.contactoService.contactosGet().subscribe(
      data => {
        this.contactos = data;
      },
      err => {
        throwError(err);
      }
    );

  }

  addContacto() {
    this.router.navigateByUrl('contacto/registro');
  }

  editar(contactosEditar) {
    
  }

  borrar(contactosBorrar) {
    this.contactoService.deleteComentario(contactosBorrar.id).subscribe(
      data => {
        Swal.fire({
          icon: 'success',
          title: 'OK',
          text: " Se borro correctamente",
        })
        this.router.navigateByUrl('contacto');
      },
      err => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.error.message + ", No se pudo eliminar tu contacto",
        })
        throwError(err);
      }
    );
  }
}
