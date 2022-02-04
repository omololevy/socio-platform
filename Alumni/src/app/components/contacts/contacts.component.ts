import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {

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
