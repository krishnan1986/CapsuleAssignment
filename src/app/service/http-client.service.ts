import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  restcallurl ='task/getTasks'

  constructor(private http: HttpClient) { }

  getTaskList()
  {
    // perform DB fetch by invoking rest call
    return this.http.get(this.restcallurl);
  }
}
