import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, 
    private tokenStorage: TokenStorageService,
    private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getRoles();
      this.router.navigateByUrl('home');
    }
  }

  onSubmit(): void {
    this.authService.login(this.form).subscribe(
      data => {
        Swal.fire('inicio de sesion: ' + data.username)
        this.tokenStorage.saveToken(data.authenticationToken);
        this.tokenStorage.saveUser(data.username);
        this.tokenStorage.saveRoles(data.roles);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
      },
      err => {
        throwError(err);
        
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "revisa tu contraseña o usuario",
        })
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

}

