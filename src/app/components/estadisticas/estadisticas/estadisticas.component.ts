import { Component, OnInit, AfterViewInit, Input, ElementRef } from '@angular/core';
import { PublicService } from 'src/app/services/public.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {
  ubicaciones: any[];
  ubicacionesLength: number;
  constructor(private publicService: PublicService) { }

  ngOnInit(): void { 
    this.publicService.getUbicacionIncidencias().subscribe(data => {
      this.ubicaciones = data;
      this.ubicacionesLength = data.length;
      
    });
  }
}