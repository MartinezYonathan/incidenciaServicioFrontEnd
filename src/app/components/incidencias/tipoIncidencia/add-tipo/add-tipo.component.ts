import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-tipo',
  templateUrl: './add-tipo.component.html',
  styleUrls: ['./add-tipo.component.css']
})
export class AddTipoComponent implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  agregarTipo(tipo: String): void {
    this.saveTipo(tipo);
    this.router.navigateByUrl('incidencias/registro');
  }

  public saveTipo(tipo: String): void {
    window.localStorage.removeItem("TIPO-INCIDENCIA");
    window.localStorage.setItem("TIPO-INCIDENCIA", JSON.stringify(tipo));
  }
  
}
