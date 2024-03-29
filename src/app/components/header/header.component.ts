import { Component } from '@angular/core';
import {ButtonComponent} from "../button/button.component";
import {UiService} from "../../services/Ui.service";
import {Subscription} from "rxjs";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ButtonComponent,
    NgForOf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  title = "Todolar"

  showAddTask!: boolean;
  subscription!: Subscription;
  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value)=> this.showAddTask = value)
  }

  toggleAddTask(){
    this.uiService.toggleAddTask()
  }
}
