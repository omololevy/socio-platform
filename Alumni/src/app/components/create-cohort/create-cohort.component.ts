import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { CohortService } from 'src/app/services/cohort.service';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';


@Component({
  selector: 'app-create-cohort',
  templateUrl: './create-cohort.component.html',
  styleUrls: ['./create-cohort.component.css'],
  providers: [CohortService,UserService,ProfileService]
})
export class CreateCohortComponent implements OnInit {

  cohort:any;
  user_id: any;

  constructor(private user: ProfileService,private userService: UserService,private cohortService : CohortService,private router: ActivatedRoute) {}

  ngOnInit(){
    this.cohort = {
      name : '',
      description :'',
    };
      this.user_id = this.router.snapshot.paramMap.get('id')
      // console.log( "aaff "+this.router.snapshot.paramMap.get('id') );
      this.user.getUser( this.user_id ).subscribe( ( result: any ) => {
        console.log( result );
      } );
  }

  
  publicCohort(){
    this.cohortService.publicCohort(this.cohort).subscribe(
      response => {
        alert('Cohort ' + this.cohort.name + ' has been created successfully!')
      },
      error => {  
        alert('An Unexpected Error Occured.');  
        console.log(error);
      });
  }
}