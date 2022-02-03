import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  baseurl = "http://127.0.0.1:8000/post/"


  constructor(private http:HttpClient) { }
  posts(postData:any):Observable<any>{
    let post_variable;
    console.log(postData)
    post_variable = {headers: new HttpHeaders({
      'Content-Type': 'application/json'})
    }
    return this.http.post(this.baseurl,postData)
  }
  getAllPosts():Observable<any>{
    return this.http.get(this.baseurl)
  }
}
