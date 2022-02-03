import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { ProfileService } from 'src/app/services/profile.service';
=======
import { ProfileService } from 'src/app/services/profile.service';

>>>>>>> e2557d525abda4e78f853b4ca9e9aa36823c5fbd

@Component({
  selector: 'app-group-posts',
  templateUrl: './group-posts.component.html',
  styleUrls: ['./group-posts.component.css'],
<<<<<<< HEAD
  providers: [PostService,ProfileService]
})
export class GroupPostsComponent implements OnInit {
  posts:any;
  user_id:any;
=======
  providers:[ProfileService]

})
export class GroupPostsComponent implements OnInit {
  user_id: any;
>>>>>>> e2557d525abda4e78f853b4ca9e9aa36823c5fbd

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
