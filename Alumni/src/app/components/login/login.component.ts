import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login:any;
  constructor(private userService : UserService, private router: Router) {}
  ngOnInit(){
    this.login = {
      username : '',
      password : ''
    };
  }
  loginUser(){
    this.userService.loginUser(this.login).subscribe(
      response => {
        console.log(response);
            this.router.navigateByUrl('/channels');
      },
      error => console.log('error',error)
    );
  }
}