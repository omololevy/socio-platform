import { Component, OnInit } from '@angular/core';
import { CohortService } from 'src/app/services/cohort.service';


@Component({
  selector: 'app-create-cohort',
  templateUrl: './create-cohort.component.html',
  styleUrls: ['./create-cohort.component.css']
})
export class CreateCohortComponent implements OnInit {

  cohort:any;

  constructor(private cohortService : CohortService) {}

  ngOnInit(){
    this.cohort = {
      name : '',
      description :'',
    };
  }
  publicCohort(){
    this.cohortService.publicCohort(this.cohortService).subscribe(
      response => {
        alert('Cohort ' + this.cohort.name + ' has been created successfully!')
      },
      error => {  
        alert('An Unexpected Error Occured.');  
        console.log(error);
      });
  }
}