import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ProfileService } from 'src/app/services/profile.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css'],
  providers: [ProfileService,UserService],
})
export class UpdateProfileComponent implements OnInit {
  update:any;
  user_id!: any;
  data: any;
  profileData: any;
  image:any;

  constructor( private userService: UserService,private user: ProfileService, private router: ActivatedRoute ) { }

  editUser=new FormGroup( {
    first_name: new FormControl( '' ),
    second_name:new FormControl(''),
    email: new FormControl( '' ),
    phone:new FormControl(''),
    bio:new FormControl(''),
    image :new FormControl('')
  } );
  message: boolean=false;
  ngOnInit(): void {
    this.user_id = this.router.snapshot.paramMap.get('id')
    // console.log( "aaff"+this.router.snapshot.paramMap.get('id') );
    this.user.getUser( this.user_id ).subscribe( ( result: any ) => {
      // console.log( result );
      this.editUser=new FormGroup( {
        first_name: new FormControl( result['first_name'] ),
        second_name:new FormControl(result['second_name']),
        email: new FormControl( result['email'] ),
        phone:new FormControl(result['tel_number']),
        bio:new FormControl(result['bio']),
      } );
    } );
  }
  UpdateData() {

    this.user.updateProfile(this.profileData).subscribe( ( result ) => {
      //console.log( result );
      this.message=true;
    } )
  }
  removeMessage() {
    this.message=false;
  }
}