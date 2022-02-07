import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { CohortService } from 'src/app/services/cohort.service';

@Component({
  selector: 'app-cohort',
  templateUrl: './cohort.component.html',
  styleUrls: ['./cohort.component.css'],
  providers: [PostService,CohortService]

})
export class CohortComponent implements OnInit {

  posts = [{title:''},{post:''}]
  public_cohort_id:any;
  constructor(private post:PostService,private router:ActivatedRoute,public cohort:CohortService) { this.getPosts();}

  ngOnInit(): void {
    this.public_cohort_id = this.router.snapshot.paramMap.get('public_cohort_id')
      console.log( "aaff "+this.router.snapshot.paramMap.get('public_cohort_id') );
      this.cohort.getCohort( this.public_cohort_id ).subscribe( ( result: any ) => {
        console.log( result );
      } );

  }
  getPosts =() =>{
    this.post.getAllPosts().subscribe(
      data =>{
        this.posts = data ;
      },
      error =>{
      console.log(error);
     }
    );
  }

}
