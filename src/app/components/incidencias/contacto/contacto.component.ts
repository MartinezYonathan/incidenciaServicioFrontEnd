import { Component, OnInit } from '@angular/core';
import { ContactoService } from 'src/app/services/contacto.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  correo: string;
  map: any;
  tipoIncidencia: string;

  constructor(private contactoServicio:ContactoService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {

    this.form.tipoAlarma = "Correo";
    this.form.parentesco = "Hermana";


    this.contactoServicio.contactosPost(this.form).subscribe(
      data => {
        Swal.fire({
          icon: 'success',
          title: 'OK',
          text: " Se registro correctamente",
        })
        this.router.navigateByUrl('contacto');
      },
      err => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.error.message + ", No se pudo registrar tu contacto",
        })
      }
    );  
  }

}
