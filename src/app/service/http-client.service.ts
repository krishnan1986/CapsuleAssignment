import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { task } from '../model/Task';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  restcallurl ='http://localhost:8111/tasks'

  constructor(private http: HttpClient) { }

  getTaskList()
  {
    // perform DB fetch by invoking rest call
    return this.http.get<task[]>(this.restcallurl);
  }

  addTask(task)
  {
   console.log('inside add task button fucntion');
    return this.http.post<task>("http://localhost:8111/addTask",task);
  }

  searchTask(task)
  {
    console.log('inside search task button fucntion');
    return this.http.post<task[]>("http://localhost:8111/searchTask",task);
  }
}
