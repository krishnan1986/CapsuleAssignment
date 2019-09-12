import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { task } from '../model/Task';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  

  restcallurl ='http://localhost:8111/ViewTask/tasks';
  sampleMap = new Map<string, string>();
  

    angular: any;

  constructor(private http: HttpClient) { }

  getTaskList()
  {
    // perform DB fetch by invoking rest call
    return this.http.get<task[]>(this.restcallurl);
  }

  addTask(task)
  {
   console.log('inside add task button fucntion');
   console.log("task obj"+JSON.stringify(task));
   const convMap ={};
   var myJson=JSON.stringify(task);
   //this.sampleMap= JSON.parse(myJson);
   console.log("sampleMap"+this.sampleMap);
  //  this.sampleMap.forEach((val: string ,key:string) => {
  //     convMap[key]=val;
     
  //  });
  //  console.log("map"+ convMap);
  
    return this.http.post<task>("http://localhost:8111/addTask",task);
  }

  searchTask(task)
  {
    console.log('inside search task button fucntion');
    return this.http.post<task[]>("http://localhost:8111/searchTask",task);
  }
}
