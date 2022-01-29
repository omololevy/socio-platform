import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [UserService],
})
export class UserProfileComponent implements OnInit {
  user_profile:any;
  username = '';
  email = '';
  first_name = '';
  second_name = '';


  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.user_profile = {
      username : '',
      email :'',
      password:'',
    };
  }

}
