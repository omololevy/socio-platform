import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { HttpClientXsrfModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService],
})
export class RegisterComponent implements OnInit {
  passwordMismatch: boolean = false;
  usernameExists: boolean = false;

  register:any;

  constructor(private userService : UserService, private router: Router){}

  ngOnInit(){
    this.register = {
      username : '',
      email :'',
      password:'',
    };
  }
  registerUser(){
    this.userService.registerUser(this.register).subscribe(
      response => {
        console.log(response);
            this.router.navigateByUrl('/login');
      },
      error => console.log('error',error)
    );
  }
}
