import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-group-posts',
  templateUrl: './group-posts.component.html',
  styleUrls: ['./group-posts.component.css'],
  providers: [PostService,ProfileService]
})
export class GroupPostsComponent implements OnInit {
  posts:any;
  user_id:any;

  constructor(private post:PostService,private user:ProfileService,private router:ActivatedRoute) { this.getPosts();}

  ngOnInit(): void {
    this.user_id = this.router.snapshot.paramMap.get('id')
      // console.log( "aaff "+this.router.snapshot.paramMap.get('id') );
      this.user.getUser( this.user_id ).subscribe( ( result: any ) => {
        console.log( result );
      } );

  }
  getPosts =() =>{
    this.post.getAllPosts().subscribe(
      data =>{
        this.post = data ;
      },
      error =>{
      console.log(error);
     }
    );
  }

}
