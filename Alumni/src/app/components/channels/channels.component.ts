import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { ActivatedRoute } from '@angular/router';
import { CohortService } from 'src/app/services/cohort.service';


@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css'],
  providers: [ProfileService,CohortService]

})
export class ChannelsComponent implements OnInit {
  cohorts = [{name:''},{description:''}];
  user_id!:any
  // getCohorts: any;

  constructor( private user: ProfileService,private cohort: CohortService, private router: ActivatedRoute ) { this.getCohorts();}

  ngOnInit() {
    this.user_id = this.router.snapshot.paramMap.get('id')
    // console.log( "aaff"+this.router.snapshot.paramMap.get('id') );
    this.user.getUser( this.user_id ).subscribe( ( result: any ) => {
      // console.log( result );
    } );
  }
  getCohorts =() =>{
    this.cohort.getAllCohorts().subscribe(
      data =>{
        this.cohorts = data ;
      },
      error =>{
      console.log(error);
     }
    );
  }

  }
