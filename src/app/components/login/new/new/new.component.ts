import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
 
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  correo: string;

  constructor(private route: ActivatedRoute, private authService: AuthService) {   }
 

  ngOnInit(): void {
    this.form.email = this.route.snapshot.queryParams["correo"];
  }

  onSubmit(): void {
    console.log(this.form);
    
    this.authService.newpass(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    )};
}

