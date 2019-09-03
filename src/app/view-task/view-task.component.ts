import { Component, OnInit } from '@angular/core';
import {HttpClientService } from '../service/http-client.service';
import { task } from '../model/Task';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {

   isSearched: Boolean =false;
   tasks:task[];
   
  constructor(private httpClientService: HttpClientService) {

    
   }

  ngOnInit() {
    this.httpClientService.getTaskList().subscribe
    (
      response => this.handle(response),

    );
  }

  handle(response)
  {
  this.tasks=response;
  }

  

}
