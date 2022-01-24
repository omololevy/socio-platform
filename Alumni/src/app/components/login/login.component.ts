import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:any;

  ngOnInit(){
    this.login = {
      username : '',
      password : ''
    };
  }

  loginUser(){
    this.userService.loginUser(this.register).subscribe(
      response => {
        alert('User ' + this.register.username + ' has been created successfully!')
      },
      error => console.log('error',error)
    );
  }

}
