import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FundraiserService {
  baseurl = "http://127.0.0.1:8000/fundraiser/"


  constructor(private http:HttpClient) { }

  fundraiser(fundraiserData:any):Observable<any>{
    let fundraiser;
    console.log(fundraiserData)
    fundraiser = {headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
    }
    return this.http.post('http://127.0.0.1:8000/fundraiser/',fundraiserData)
  }
  getFundraiser(fundraiser_id:number){
    return this.http.get(`${this.baseurl}${fundraiser_id}/`)
  }   
  getAllFundraisers():Observable<any>{
    return this.http.get(this.baseurl)
  }
}
