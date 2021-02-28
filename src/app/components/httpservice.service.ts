import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Httpservice {

  constructor(
    private http: HttpClient,
   
  ) 
  {

   }


   cooperativePost(serviceName: string, data: any): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, XApiKey');
    headers.append('Access-Control-Allow-Origin', '*');
    const options = { headers: headers, withCredentials: false };
    const url = environment.authUrl + serviceName;
    return this.http.post(url, data, {...options}).pipe(shareReplay(1));
  }


  cooperativeGet(serviceName: string): Observable<any>  {
    const headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, XApiKey');
    headers.append('Access-Control-Allow-Origin', '*');
    const options = { headers: headers};

    const url = environment.authUrl + serviceName;

    return this.http.get(url, {...options}).pipe(shareReplay(1));
  }


 
}

