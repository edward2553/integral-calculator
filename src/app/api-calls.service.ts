import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {

  constructor( private http : HttpClient) { }

  createAuthorizationHeader(headers: HttpHeaders) {
    
    
    
    
  }

  getResult( exp : string = '' ) : Observable<any>{

    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Access-Control-Allow-Origin', '*');
    headers = headers.append('Access-Control-Allow-Headers', 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method');
    headers = headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    headers = headers.append('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

    let uri = encodeURIComponent(exp);
    const appid = 'KKR8HE-YJTPP85JH9';
    const URL = `http://api.wolframalpha.com/v2/query?appid=${appid}&input=${uri}&format=plaintext,image&output=json`;
    return this.http.get(URL, {
      headers: headers
    });
    
  }

}
