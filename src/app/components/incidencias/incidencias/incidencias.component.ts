import { Component, OnInit } from '@angular/core';
import { PublicService } from 'src/app/services/public.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-incidencias',
  templateUrl: './incidencias.component.html',
  styleUrls: ['./incidencias.component.css']
})
export class IncidenciasComponent implements OnInit {

  form: any = {};
  commentForm: FormGroup;
  isSuccessful = false;
  isSignUpFailed = false;

  roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;
  token: any;
  incidencias: any[];
  incidenciasLength: number;
  
  constructor(private tokenService: TokenStorageService,
    private publicService: PublicService) { 
      
    }

  ngOnInit(): void {
    this.username = this.tokenService.getUser();
    this.token = this.tokenService.getToken();
    this.roles = this.tokenService.getRoles();

    
    this.publicService.getIncidenciasPublicas().subscribe(data => {
      this.incidencias = data;
      this.incidenciasLength = data.length;
    });
  }
  
  postComment() {

  }

}
