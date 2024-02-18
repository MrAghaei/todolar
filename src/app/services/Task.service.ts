import { Injectable } from '@angular/core';
import {Task} from "../../Tasks";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  deleteTask(task: Task): void{
    console.log('Task deleted');
    console.log(task);


  }
  addTask(tasks: Task[]): void{
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  getTasks(key: string): Task[] | null{
     const storedTasks = localStorage.getItem(key);
     return storedTasks ? JSON.parse(storedTasks) : [];
  }

}
