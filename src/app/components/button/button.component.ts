import {Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
   @Input() color: string | undefined;
   @Input() text: string | undefined;
   @Output() btnClick = new EventEmitter()

  onClick(){
     this.btnClick.emit();
  }
}
