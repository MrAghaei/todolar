import { Component } from '@angular/core';
import {AddTaskComponent} from "../add-task/add-task.component";
import {TaskItemComponent} from "../task-item/task-item.component";
import {Task} from "../../../Tasks";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    AddTaskComponent,
    TaskItemComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})

export class TasksComponent {

 tasks: Task[] = []

  deleteTask(task: Task){
    console.log(task);
  }
  addTask(task: Task){
    console.log(task);
  }
}
