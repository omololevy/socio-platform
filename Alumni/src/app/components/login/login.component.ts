import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  
  showErrorMessage: boolean = false;
  
  constructor(private service: UserService, private router: Router) {}
  ngOnInit(): void {}

  loginUser(form: NgForm) {
    this.showErrorMessage = false;
    const username = form.value.username;
    const password = form.value.password;
    this.service.loginUser(username, password).subscribe(
      (response:any) => {
        console.log(response);
        localStorage.setItem('currentUser', JSON.stringify(response));
        this.service.getToken(username, password).subscribe(
          (response: any) => {
            console.log(response);
            localStorage.setItem('token', response.token);
          }
        );
        this.router.navigateByUrl('/user_profile');
      },
      (error:any) => {
        console.log(error);
        this.showErrorMessage = true;
      }
    );
  }
}