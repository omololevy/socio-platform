import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CohortService {
  baseurl = "http://127.0.0.1:8000/public-cohort/"



  constructor(private http:HttpClient) { }

  publicCohort(pubCohortData:any):Observable<any>{
    let pub_cohort;
    console.log(pubCohortData)
    pub_cohort = {headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
    }
    return this.http.post('http://127.0.0.1:8000/public-cohort/',pubCohortData)
  }
  getAllCohorts():Observable<any>{
    return this.http.get(this.baseurl)
  }

  getCohort(public_cohort_id:number){
    return this.http.get(`${this.baseurl}${public_cohort_id}/`)
  }  
}
