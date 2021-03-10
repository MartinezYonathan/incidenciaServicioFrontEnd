import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.component.html',
  styleUrls: ['./seguimiento.component.css']
})
export class SeguimientoComponent implements OnInit {
  subreddits: Array<Object> = [];
  displayViewAll: boolean;

  constructor() {
  
  }

  ngOnInit(): void { }

}
