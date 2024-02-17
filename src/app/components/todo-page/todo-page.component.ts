import { Component } from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {AddTaskComponent} from "../add-task/add-task.component";
import {TasksComponent} from "../tasks/tasks.component";

@Component({
  selector: 'app-todo-page',
  standalone: true,
  imports: [
    HeaderComponent,
    AddTaskComponent,
    TasksComponent
  ],
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.scss'
})
export class TodoPageComponent {

}
