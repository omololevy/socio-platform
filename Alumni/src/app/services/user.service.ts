import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // baseApiUrl = "http://127.0.0.1:8000/profile/"
  photoUrl = "http://res.cloudinary.com/dim8pysls/image/upload/"

  constructor(private http:HttpClient) { }

  registerUser(userData:any):Observable<any>{
    let headers;
    console.log(userData)
    headers = {headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
    }
    return this.http.post('http://127.0.0.1:8000/users/',userData, headers)
  }

  loginUser(userData:any):Observable<any>{
    return this.http.post('http://127.0.0.1:8000/api-auth/',userData)
  }

  upload(file:any):Observable<any> {
    // Create form data
    const formData = new FormData();   
    // Store form name as "file" with file data
    formData.append("file", file, file.name);
    // Make http post request over api
    // with formData as req
    return this.http.post(this.photoUrl, formData)
  }
}
