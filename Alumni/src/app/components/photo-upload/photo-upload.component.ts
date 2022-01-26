import { Text } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-photo-upload',
  templateUrl: './photo-upload.component.html',
  styleUrls: ['./photo-upload.component.css']
})
export class PhotoUploadComponent implements OnInit {
  // Variable to store shortLink from api response
  shortLink: string = "";
  loading: boolean = false; // Flag variable
  photo: File = null as any; // Variable to store file


  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  // On file Select
  onChange(event:any) {
    this.photo = event.target.files[0];
  }
  // OnClick of button Upload
  onUpload() {
    this.loading = !this.loading;
    console.log(this.photo);
    this.userService.upload(this.photo).subscribe(
        (event: any) => {
            if (typeof (event) === 'object') {

                // Short link via api response
                this.shortLink = event.link;

                this.loading = false; // Flag variable 
            }
        }
    );
  }

}
