import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-acti-registro',
  templateUrl: './acti-registro.component.html',
  styleUrls: ['./acti-registro.component.css']
})
export class ActiRegistroComponent implements OnInit {

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {

    this.form.email = this.validaParametro(this.route.snapshot.queryParams["correo"], "correo");
    this.form.nombre = this.validaParametro(this.route.snapshot.queryParams["nombre"], "nombre");
    this.form.matricula = this.validaParametro(this.route.snapshot.queryParams["matricula"], "matricula");
    this.form.plantel = this.validaParametro(this.route.snapshot.queryParams["plantel"], "plantel");
    this.form.turno = this.validaParametro(this.route.snapshot.queryParams["urlFoto"], "urlFoto");
    this.form.turno = this.validaParametro(this.route.snapshot.queryParams["carrera"], "carrera");
  }

  onSubmit(): void {
    this.userService.register(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

  validaParametro(atributo, nombre): String {
    if (atributo == "null") {
      return "";
    }
    else {
      return atributo;
    }
  }

}