import {Component, OnInit} from '@angular/core';
import {AddTaskComponent} from "../add-task/add-task.component";
import {TaskItemComponent} from "../task-item/task-item.component";
import {Task} from "../../../Tasks";
import {NgForOf} from "@angular/common";
import {TaskService} from "../../services/Task.service";

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

export class TasksComponent implements OnInit{
  constructor(private taskService: TaskService) {
  }

 tasks: Task[] = [
   {
     text : "test",
     day : "something",
     id: '1'
   },
   {
     text : "test",
     day : "something",
     id: '2'
   },
   {
     text : "test",
     day : "something",
     id: '3'
   },
   {
     text : "test",
     day : "something",
     id: '4'
   }
 ]

  ngOnInit() {
      this.tasks = this.taskService.getTasks('tasks')
  }

  deleteTask(task: Task){
    this.tasks = this.tasks.filter((t)=> t.id !== task.id)
    this.taskService.deleteTask(task);
    this.taskService.addTask(this.tasks);
  }
  addTask(task: Task){
    this.tasks.push(task);
    this.taskService.addTask(this.tasks);
  }
}
