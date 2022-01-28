import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthapiService {
  APIUrl = 'http://127.0.0.1:8000';

 constructor(private http: HttpClient) {}
  loginUser(username: string, password: string) {
    return this.http.post(this.APIUrl + '/app/api/auth/login/', {
      username: username,
      password: password,
    });
  }

  getToken(username: string, password: string) {
    return this.http.post(this.APIUrl + '/api-auth/', {
      username: username,
      password: password,
    });
  }
}