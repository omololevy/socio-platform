import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';
import { HttpClientXsrfModule } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService],
})
// export class RegisterComponent implements OnInit {
//   passwordMismatch: boolean = false;
//   usernameExists: boolean = false;
//   register:any;
//   constructor(private userService : UserService, private router: Router){}
//   ngOnInit(){
//     this.register = {
//       username : '',
//       email :'',
//       password:'',
//       confirm: '',
//     };
//   }
//   registerUser(){
//     this.userService.registerUser(this.register).subscribe(
//       response => {
//         console.log(response);
//             this.router.navigateByUrl('/login');
//       },
//       error => console.log('error',error)
//     );
//   }
// }
export class RegisterComponent implements OnInit {
  passwordMismatch: boolean = false;
  usernameExists: boolean = false;

  constructor(private service: UserService, private router: Router) {}
  ngOnInit(): void {}

  registerUser(form: NgForm) {
    this.passwordMismatch = false
    this.usernameExists = false
    const email = form.value.email;
    const password = form.value.password;
    const confirmPassword = form.value.password2;
    const first_name = form.value.first_name;
    const second_name = form.value.second_name;
    const username = form.value.username;
    if (password == confirmPassword) {
      this.service
        .registerUser(username, password, email, first_name, second_name)
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