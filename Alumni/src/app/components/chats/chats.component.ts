import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css'],
  providers: [UserService],

})
export class ChatsComponent{
  users = [{username:''}];

  constructor(private user : UserService) { this.getUsers();}

  getUsers =() =>{
    this.user.getAllUsers().subscribe(
      data =>{
        this.users = data ;
      },
      error =>{
      console.log(error);
     }
    );
  }

}
