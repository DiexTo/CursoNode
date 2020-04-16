import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CovidInfo } from '../model/Covidinfo';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  getInfoCovid(): Observable<CovidInfo[]>{
    return this.http.get<CovidInfo[]>("https://corona.lmao.ninja/countries");
  }

}
