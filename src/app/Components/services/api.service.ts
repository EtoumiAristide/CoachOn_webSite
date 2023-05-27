import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environment/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  post(parameter : Required<{endpoint : string , data : any}> ) {
    console.log(parameter.endpoint);
    console.log(parameter.data);
    return this.http.post(`${environment.BASE_URL}${parameter.endpoint}`,parameter.data, {headers:this.httpHeader()});
  }

  httpHeader() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT,DELETE',
      'Accept': 'application/json',
  });
}
}
