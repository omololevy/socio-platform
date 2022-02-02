import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseurl = "http://127.0.0.1:8000/users/"
  photoUrl = "http://res.cloudinary.com/dim8pysls/image/upload/"

  constructor(private http: HttpClient) { }

  registerUser(userData: any): Observable<any> {
    let headers;
    console.log(userData)
    headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post('http://127.0.0.1:8000/users/', userData, headers)
  }

  updateProfile(userData: any): Observable<any> {
    let attr;

    attr = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post('http://127.0.0.1:8000/profile/', userData, attr)

  }

  loginUser(userData: any): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api-auth/', userData)
  }
  getAllUsers():Observable<any>{
    return this.http.get(this.baseurl)
  }


//   logoutUser() {
//     localStorage.removeItem('currentUser');
//   }

//   currentUserValue() {
//     return JSON.parse(localStorage.getItem('currentUser'));
//   }
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
 




