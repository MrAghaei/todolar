import { Component } from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {AddTaskComponent} from "../add-task/add-task.component";
import {TasksComponent} from "../tasks/tasks.component";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    HeaderComponent,
    AddTaskComponent,
    TasksComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
