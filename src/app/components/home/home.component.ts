import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoggedIn = false;
  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if(!this.isLoggedIn){
      window.localStorage.removeItem('INCIDENCIA');
      window.localStorage.removeItem('EXPEDIENTE');
      window.localStorage.removeItem('LATITUD');
      window.localStorage.removeItem('LONGITUD');
      window.localStorage.removeItem('TIPO-INCIDENCIA');
    }
  }

}
