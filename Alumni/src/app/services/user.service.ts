import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseAPIUrl = "http://127.0.0.1:8000"
  photoUrl = "http://res.cloudinary.com/dim8pysls/image/upload/"

  constructor(private http:HttpClient) { }

  // registerUser(userData:any):Observable<any>{
  //   let headers;
  //   console.log(userData)
  //   headers = {headers: new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   })
  //   }
  //   return this.http.post('http://127.0.0.1:8000/users/',userData, headers)
  // }

  loginUser(username: string, password: string) {
    return this.http.post(this.baseAPIUrl + '/auth/login/', 
    {
      username: username,
      password: password,
    });
  }

  getToken(username: string, password: string) 
  {
    return this.http.post(this.baseAPIUrl + '/api-auth/', {
      username: username,
      password: password,
    });
  }

  registerUser(username: string,password: string,email: string,first_name: string,second_name: string) 
  {
    return this.http.post(this.baseAPIUrl + '/users', 
    {
      username: username,
      password: password,
      email: email,
      first_name: first_name,
      second_name: second_name,
    },);
  }

  updateProfile(profileData:any):Observable<any>
  {
    let attr;
    
    attr = {headers: new HttpHeaders({
      'Content-Type': 'application/json'
      
    })
    }
    return this.http.put('http://127.0.0.1:8000/profile/',profileData,attr)

  }

  upload(file:any):Observable<any> {
    const formData = new FormData();  
    formData.append("file", file, file.name);
    return this.http.post(this.photoUrl, formData)
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  currentUserValue() {
    let localStorage: any = null;
    return JSON.parse(localStorage.getItem('currentUser'));
  }



}
