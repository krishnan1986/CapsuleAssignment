import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { TaskHomeComponent } from './task-home/task-home.component';
import { AddTaskComponent } from './add-task/add-task.component';
import {AlertModule} from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ViewTaskComponent,
    UpdateTaskComponent,
    TaskHomeComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
