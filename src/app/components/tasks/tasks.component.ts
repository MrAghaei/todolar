import { Component } from '@angular/core';
import {AddTaskComponent} from "../add-task/add-task.component";
import {TaskItemComponent} from "../task-item/task-item.component";
import {Task} from "../../../Tasks";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    AddTaskComponent,
    TaskItemComponent,
    NgForOf
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})

export class TasksComponent {

 tasks: Task[] = [
   {
     text : "test",
     day : "something",
   },
   {
     text : "test",
     day : "something",
   },
   {
     text : "test",
     day : "something",
   },
   {
     text : "test",
     day : "something",
   }
 ]

  deleteTask(task: Task){
    console.log(task);
  }
  addTask(task: Task){
    console.log(task);
  }
}
