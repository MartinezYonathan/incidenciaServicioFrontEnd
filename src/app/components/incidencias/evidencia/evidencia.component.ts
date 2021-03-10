import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evidencia',
  templateUrl: './evidencia.component.html',
  styleUrls: ['./evidencia.component.css']
})
export class EvidenciaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  goToCreateEvidencia() {
    this.router.navigateByUrl('addevidencia');
  }

  goToViewEvidencia() {
    this.router.navigateByUrl('evidencias');
  }
}
