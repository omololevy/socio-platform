import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { HttpClientXsrfModule } from '@angular/common/http';

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

  constructor(private userService : UserService) {}

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
        alert('User ' + this.register.username + ' has been created successfully!')
      },
      error => {  
        alert('An Unexpected Error Occured. Please try again later!');  
        console.log(error);
      });
  }
}
