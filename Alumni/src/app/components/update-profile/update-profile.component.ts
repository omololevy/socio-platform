import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { HttpClientXsrfModule } from '@angular/common/http';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css'],
  providers: [UserService],
})
export class UpdateProfileComponent implements OnInit {
  update:any;

  constructor(private userService : UserService) { }

  ngOnInit(){
    this.update = {
      first_name : '',
      second_name: '',
      email : '',
      profile_pic: '',
      phone_number :'',
      bio :'',


    };
  }


updateProfile(){
  this.userService.registerUser(this.update).subscribe(
    response => {
      alert('Profile for ' + this.update.username + ' has been updated successfully!')
    },
    error => console.log('error',error)
  );
}

}