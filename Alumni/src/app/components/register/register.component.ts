import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthapiService } from 'src/app/services/authapi.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  passwordMismatch: boolean = false;
  usernameExists: boolean = false;

  constructor(private service: AuthapiService, private router: Router) { }

  ngOnInit(): void {
  }
  registerUser(form: NgForm) {
    this.passwordMismatch = false
    this.usernameExists = false
    const email = form.value.email;
    const password = form.value.password;
    const confirmPassword = form.value.password2;
    const first_name = form.value.first_name;
    const last_name = form.value.last_name;
    const username = form.value.username;
    if (password == confirmPassword) {
      this.service
        .registerUser(username, password, email, first_name, last_name)
        .subscribe(
          (response) => {
            console.log(response);
            this.router.navigateByUrl('/login');
          },
          (error) => {
            this.usernameExists = true
            console.log(error);
          }
        );
    }
    else {
      this.passwordMismatch = true
    }
  }

}
