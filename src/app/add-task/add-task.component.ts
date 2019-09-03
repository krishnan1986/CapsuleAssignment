import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';
import { task } from '../model/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  taskObj: task= new task("","",0,new Date,new Date);
  postUrl:string ="http://localhost:8111/addTask"

  constructor( private httpClientService:HttpClientService) {

    
  }

  ngOnInit() {
    console.log('inside add task comp');
  }

  addTaskService():void  {
     this.httpClientService.addTask(this.taskObj)
        .subscribe( data => {
          alert("task created successfully.");
        });

  };
  

}
