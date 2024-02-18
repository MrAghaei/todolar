import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Subscription} from "rxjs";
import {UiService} from "../../services/Ui.service";
import {NgIf} from "@angular/common";
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Task} from "../../../Tasks";

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent implements OnInit{
  public showAddTask!: boolean;
  private _subscription!: Subscription;
  @Output() onAddTask: EventEmitter<any> = new EventEmitter<any>();
  @Input() tasks: Task[];
  taskForm: FormGroup;
  //#region Lifecycle
  ngOnInit() {
    this.createFormGroup();
  }
  createFormGroup(){
     this.taskForm = this.formBuilder.group({
      text: [null],
      day: [null]
    })
  }
 //#endregion
  constructor(private uiService: UiService, private formBuilder: FormBuilder) {
    this._subscription = this.uiService.onToggle().subscribe((value)=> this.showAddTask = value)
  }
  private generateId(): number {
    return Math.floor(Math.random() * 1000);
  }
  onAdd(): void{
    if(!this.taskForm.value.text){
      alert("Please Enter Data")
      return
    }
    const newTask: Task = {
      text: this.taskForm.value.text,
      day: this.taskForm.value.day,
      id: this.generateId().toString()
    };
    this.onAddTask.emit(newTask);
    this.taskForm.reset();
  }
}
