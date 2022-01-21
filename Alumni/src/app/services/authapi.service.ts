import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthapiService {
  APIUrl = 'http://127.0.0.1:8000';
  
  constructor() { }
}
