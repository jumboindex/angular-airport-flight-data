import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiEndpoint: string = 'https://gibraltar-airport-feed.p.rapidapi.com' 

  headers = new HttpHeaders()
            .set('x-rapidapi-host','gibraltar-airport-feed.p.rapidapi.com')
            .set('x-rapidapi-key', "a5b7e5ab23msha5702ca313d1db2p1ad4e9jsncc39074f7c56");

  

  constructor(private http: HttpClient) { }

  getArrivials () {
    const headers = this.headers
    return this.http.get(`${this.apiEndpoint}/arrivals`, {headers} )
  }
}
