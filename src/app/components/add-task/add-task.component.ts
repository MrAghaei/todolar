import { Component } from '@angular/core';
import {Subscription} from "rxjs";
import {UiService} from "../../services/Ui.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {
  showAddTask!: boolean;
  subscription!: Subscription;
  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value)=> this.showAddTask = value)
  }
}
