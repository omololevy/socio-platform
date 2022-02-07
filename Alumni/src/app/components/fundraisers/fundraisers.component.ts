import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { FundraiserService } from 'src/app/services/fundraiser.service';


@Component({
  selector: 'app-fundraisers',
  templateUrl: './fundraisers.component.html',
  styleUrls: ['./fundraisers.component.css'],
  providers: [ProfileService,FundraiserService]
})
export class FundraisersComponent implements OnInit {
  fundraisers = [{fund_name:''},{content:''},{start_date:''},{end_date:''},{created_by:''}];
  user_id!:any
  fundraiser_id:any

  constructor( private user: ProfileService,private fundraiser: FundraiserService, private router: ActivatedRoute ) { this.getFundraisers();}

  ngOnInit() {
    
  }
  getFundraisers =() =>{
    this.fundraiser.getAllFundraisers().subscribe(
      data =>{
        this.fundraisers = data ;
      },
      error =>{
      console.log(error);
     }
    );
  }

}
