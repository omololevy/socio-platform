import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css'],
  providers: [ProfileService]
})
export class ChannelsComponent implements OnInit {
  user_id!:any

  constructor( private user: ProfileService, private router: ActivatedRoute ) { }

  ngOnInit(): void {
    this.user_id = this.router.snapshot.paramMap.get('id')
    // console.log( "aaff"+this.router.snapshot.paramMap.get('id') );
    this.user.getUser( this.user_id ).subscribe( ( result: any ) => {
      // console.log( result );
    } );
  }
  }
