import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../project';
import { Task } from '../task';
import { ProjectsService } from './../projects.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  taskEditMode: boolean = false;
  newName: string = '';

  @Input() project!: Project;
  @Input() task!: Task;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {}

  updateTask() {
    this.projectsService.setProjects();
  }

  completeTask() {
    this.task.complete = !this.task.complete;

    this.projectsService.setProjects();
  }

  removeTask(task: Task, project: Project) {
    this.projectsService.removeTask(task, project);
  }
}
