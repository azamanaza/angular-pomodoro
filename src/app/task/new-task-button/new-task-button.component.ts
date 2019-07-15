import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../task.service';

export enum NewTaskButtonType {
  BUTTON = 'button',
  LINK = 'link'
}
@Component({
  selector: 'app-new-task-button',
  templateUrl: './new-task-button.component.html',
  styleUrls: ['./new-task-button.component.scss']
})
export class NewTaskButtonComponent implements OnInit {

  @Input() type: NewTaskButtonType  = NewTaskButtonType.BUTTON;
  @Input() label: string = 'Create a Task';

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    console.log(this);
  }

  openNewTaskDialog() {
    this.taskService.createTask();
  }

  isTypeButton(): boolean {
    return this.type === NewTaskButtonType.BUTTON;
  }
}
