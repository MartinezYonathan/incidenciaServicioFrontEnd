import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;
  navbarOpen = false;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();


    if (this.isLoggedIn) {
      const usernameToken = this.tokenStorageService.getUser();
      const rolesToken = this.tokenStorageService.getRoles();
      this.roles = rolesToken;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_ROOT');

      this.username = usernameToken;
    }
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  setNavbarOpen() {
    this.navbarOpen = !this.navbarOpen;
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
