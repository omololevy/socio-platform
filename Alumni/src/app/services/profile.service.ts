import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  url='http://127.0.0.1:8000/users/'
  photoUrl = "http://res.cloudinary.com/dim8pysls/image/upload/"


  constructor(private http: HttpClient ) { }
  saveUserData(data:any){
    console.log(data) ;
    return this.http.post(this.url, data);
  }
  getUser(user_id:number){
    return this.http.get(`${this.url}${user_id}/`)
  }
  updateProfile(profileData:any):Observable<any>{
    let attr;
    
    attr = {headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
    }
    return this.http.put('http://127.0.0.1:8000/update_profile/',profileData,attr)

  }
  // upload(file:any):Observable<any> {
  //   // Create form data
  //   const formData = new FormData();   
  //   // Store form name as "file" with file data
  //   formData.append("file", file, file.name);
  //   // Make http post request over api
  //   // with formData as req
  //   return this.http.post(this.photoUrl, formData)
  // }
}
