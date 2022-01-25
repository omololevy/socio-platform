import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:any;

  constructor(private userService : UserService) {}

  ngOnInit(){
    this.login = {
      username : '',
      password : ''
    };
  }

  loginUser(){
    this.userService.loginUser(this.login).subscribe(
      response => {
        alert('User ' + this.login.username + ' has been logged in succesfully!')
      },
      error => console.log('error',error)
    );
  }

}
