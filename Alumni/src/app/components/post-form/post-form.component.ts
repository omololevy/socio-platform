import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';
import { ProfileService } from 'src/app/services/profile.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
  providers: [PostService,UserService,PostService]
})
export class PostFormComponent implements OnInit {
  post:any;
  user_id:any

  constructor(private postService:PostService,private userService:UserService,private user:ProfileService,private router:ActivatedRoute) { }

  ngOnInit(){
    this.post = {
      post :'',
    };
      this.user_id = this.router.snapshot.paramMap.get('id')
      // console.log( "aaff "+this.router.snapshot.paramMap.get('id') );
      this.user.getUser( this.user_id ).subscribe( ( result: any ) => {
        console.log( result );
      } );
  }
  posts(){
    this.postService.posts(this.post).subscribe(
      response => {
        alert(this.post.title + ' has been created successfully!')
      },
      error => {  
        alert('An Unexpected Error Occured.');  
        console.log(error);
      });
  }
}
