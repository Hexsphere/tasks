import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from 'src/app/data/services/task.service';
import { Task } from 'src/app/data/types/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  taskEditMode: boolean = false;
  newName: string = '';

  @Input() task!: Task;

  constructor(private taskService: TaskService) {}

  ngOnInit() {}

  updateTask(payload: object) {
    this.taskService.updateTask(this.task, payload);
  }

  removeTask() {
    this.taskService.deleteTask(this.task);
  }
}
