import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from 'src/app/data/services/task.service';
import { Task } from 'src/app/data/types/task';
import { ModalService } from '../../data/services/modal.service';
import { ProjectService } from '../../data/services/project.service';
import { Project } from '../../data/types/project';
import { User } from '../../data/types/user';
import { AuthService } from './../../data/services/auth.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  modal: boolean = false;

  user!: User;
  projects: Project[] = [];
  tasks: Task[] = [];

  @Input() project!: Project;

  constructor(
    private modalService: ModalService,
    private authService: AuthService,
    private projectService: ProjectService,
    private taskService: TaskService
  ) {}

  ngOnInit() {
    // this.authService.$user.subscribe(async (data: User) => {
    //   this.user = data;
    //   if (this.user) await this.projectService.getProjects();
    // });
    // this.projectService.$projects.subscribe(async (data: Project[]) => {
    //   this.projects = data;
    //   if (this.projects.length > 0) {
    //     await this.taskService.getTasks();
    //     this.taskService.$tasks.subscribe((data: Task[]) => {
    //       this.tasks = data;
    //     });
    //   }
    // });
  }

  toggleModal(type: string, show: boolean) {
    this.modalService.setModal(type, show);
  }
}
