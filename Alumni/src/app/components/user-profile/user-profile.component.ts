import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ProfileService } from 'src/app/services/profile.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [UserService,ProfileService],
})
export class UserProfileComponent implements OnInit {
  user_profile:any;
  username = '';
  email = '';
  first_name = '';
  second_name = '';
  user_id!:any;


  constructor(private userService : UserService,private user: ProfileService, private router: ActivatedRoute) { }

  ngOnInit(): void {

    this.user_id = this.router.snapshot.paramMap.get('id')
    // console.log( "aaff"+this.router.snapshot.paramMap.get('id') );
    this.user.getUser( this.user_id ).subscribe( ( result: any ) => {
      console.log( result );
    } );

    
    this.user_profile = {
      username : '',
      email :'',
      password:'',
    };
    

  }

}
