import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from "../../../Tasks";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss'
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() onDeleteTask:EventEmitter<any> = new EventEmitter<any>();

  faTrash = faTrash





  onDelete(task: Task){
    this.onDeleteTask.emit(task);
  }
}
