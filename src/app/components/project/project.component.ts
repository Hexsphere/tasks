import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { AuthService } from 'src/app/data/services/auth.service';
import { Task } from 'src/app/data/types/task';
import { User } from 'src/app/data/types/user';
import { Project } from '../../data/types/project';
import { ProjectService } from './../../data/services/project.service';
import { TaskService } from './../../data/services/task.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements AfterViewInit {
  newTaskForm: boolean = false;
  name: string = '';

  @Input() project!: Project;
  @Input() tasks: Task[] = [];

  user!: User;
  completedTasks!: Task[];
  incompleteTasks!: Task[];

  @ViewChild('input') input!: ElementRef;
  @ViewChild('inputBox') inputBox!: ElementRef;

  constructor(
    private authService: AuthService,
    private taskService: TaskService,
    private projectService: ProjectService,
    private renderer: Renderer2
  ) {}

  async ngOnInit() {
    // this.authService.$user.subscribe((data: User) => (this.user = data));
    // this.taskService.$tasks.subscribe((data: Task[]) => {
    //   const filteredTasks = this.tasks.filter(
    //     (task) => task.project === this.project._id
    //   );
    //   this.completedTasks = filteredTasks.filter((task) => task.complete);
    //   this.incompleteTasks = filteredTasks.filter((task) => !task.complete);
    // });
  }

  ngAfterViewInit() {
    this.renderer.listen('window', 'click', ({ target }) => {
      if (
        target !== this.input?.nativeElement &&
        target !== this.inputBox?.nativeElement
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

  updateProject() {
    const { project } = this;

    this.projectService.updateProject(project, {
      name: project.name,
    });
  }

  removeProject(project: Project) {
    this.projectService.deleteProject(project);
  }

  addTask() {
    this.taskService.createTask(this.project._id, this.user._id, this.name);
    this.name = '';
    this.newTaskForm = false;
  }
}
