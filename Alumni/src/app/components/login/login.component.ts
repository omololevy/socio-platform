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
  user_id!:number;
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
        this.user_id = response.user_id
        console.log(this.user_id)
            this.router.navigateByUrl('/channels/'+`${this.user_id}`);
      },
      error => console.log('error',error)
    );
  }
}