import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CohortService } from 'src/app/services/cohort.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers:[ProfileService,CohortService]
})
export class SidebarComponent implements OnInit {
  public_cohort_id: any;
  user_id:any

  constructor(private user:ProfileService,public cohort: CohortService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.public_cohort_id = this.router.snapshot.paramMap.get('public_cohort_id')
      console.log( "aaff "+this.router.snapshot.paramMap.get('public_cohort_id') );
      this.cohort.getCohort( this.public_cohort_id ).subscribe( ( result: any ) => {
        console.log( result );
      } );

    this.user_id = this.router.snapshot.paramMap.get('id')
    // console.log( "aaff "+this.router.snapshot.paramMap.get('id') );
    this.user.getUser( this.user_id ).subscribe( ( result: any ) => {
      console.log( result );
    } );

  }

}
