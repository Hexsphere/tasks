import { ProjectsService } from './../projects.service';
import {
  Component,
  AfterViewInit,
  Input,
  ViewChild,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { Project } from '../project';
import { Task } from '../task';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements AfterViewInit {
  newTaskForm: boolean = false;
  name: string = '';

  @Input() project!: Project;

  @ViewChild('input') input!: ElementRef;
  @ViewChild('inputBox') inputBox!: ElementRef;

  constructor(
    private projectsService: ProjectsService,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit() {
    this.renderer.listen('window', 'click', ({ target: t }) => {
      if (
        t !== this.input?.nativeElement &&
        t !== this.inputBox?.nativeElement
      ) {
        this.inputBox?.nativeElement?.classList.remove('focus');
      }
    });
  }

  toggleTaskForm() {
    this.newTaskForm = true;

    this.input?.nativeElement.focus();
    this.inputBox?.nativeElement.classList.add('focus');
  }

  closeTaskForm() {
    this.newTaskForm = false;
    this.name = '';
  }

  completedTasks() {
    return this.project.tasks.filter((task) => task.complete === true);
  }

  notCompletedTasks() {
    return this.project.tasks.filter((task) => task.complete === false);
  }

  updateProject() {
    this.projectsService.setProjects();
  }

  removeProject(project: Project) {
    this.projectsService.removeProject(project);
  }

  addTask() {
    this.projectsService.addTask(this.name, this.project);
    this.name = '';
    this.newTaskForm = false;
  }
}
