import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthapiService } from '../../services/authapi.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
