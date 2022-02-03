import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';


@Component({
  selector: 'app-group-posts',
  templateUrl: './group-posts.component.html',
  styleUrls: ['./group-posts.component.css'],
  providers:[ProfileService]

})
export class GroupPostsComponent implements OnInit {
  user_id: any;

  constructor() { }

  ngOnInit(): void {
  }

}
