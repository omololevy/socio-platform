import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/';

@Injectable()
export class UserService {

  constructor(private http:HttpClient) { }

  registerUser(userData:any):Observable<any>{
    let mercy;
    console.log(userData)
    mercy = {headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
    }
    return this.http.post('http://127.0.0.1:8000/users/',userData,mercy)
  }
}