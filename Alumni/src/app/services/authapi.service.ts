import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthapiService {
  readonly APIUrl = 'http://127.0.0.1:8000';
  readonly PhotoUrl = 'http://127.0.0.1:8000/images'; 

  constructor(private http: HttpClient) { }
  loginUser(username: string, password: string) {
    return this.http.post(this.APIUrl + '/app/api-auth/login/', {
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

  registerUser(
    username: string,
    password: string,
    email: string,
    first_name: string,
    last_name: string
  ) {
    return this.http.post(this.APIUrl + '/app/api/users/create/', {
      username: username,
      password: password,
      email: email,
      first_name: first_name,
      last_name: last_name,
    });
  }
}
