import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';
import { task } from '../model/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  model:task = new task("test","test",1,new Date(2013,12,1),new Date(2014,1,1));
  postUrl:string ="http://localhost:8111/addTask"

  constructor( private httpClientService:HttpClientService) {

    
  }

  ngOnInit() {
    console.log('inside add task comp');
  }

  addTaskService(form):void  {
    console.log(form.value)
     this.httpClientService.addTask(this.model)
        .subscribe( data => {
          alert("task created successfully.");
        });

  };
  

}
