import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/';

@Injectable({
  providedIn: 'root',
})
export class UserService {

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

  updateProfile(userData:any):Observable<any>{
    let attr;
    
    attr = {headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
    }
    return this.http.post('http://127.0.0.1:8000/profile/',userData,attr)

  }

  loginUser(userData:any):Observable<any>{
    return this.http.post('http://127.0.0.1:8000/api-auth/',userData)
  }
}
