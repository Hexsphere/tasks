import { Injectable } from '@angular/core';
import { Project } from './project';
import { Task } from './task';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects: Project[] = [];

  getProjects() {
    if (window.localStorage.projects) {
      this.projects = JSON.parse(
        window.localStorage.getItem('projects') as string
      ) as Project[];
    }

    return this.projects;
  }

  setProjects() {
    window.localStorage.setItem('projects', JSON.stringify(this.projects));
  }

  addProject(name: string) {
    const project: Project = {
      name,
      tasks: [],
    };

    this.projects.push(project);

    window.localStorage.setItem('projects', JSON.stringify(this.projects));
  }

  removeProject(project: Project) {
    this.projects.splice(this.projects.indexOf(project), 1);

    window.localStorage.setItem('projects', JSON.stringify(this.projects));
  }

  addTask(name: string, project: Project) {
    const task: Task = {
      name,
      complete: false,
    };

    project.tasks.push(task);

    window.localStorage.setItem('projects', JSON.stringify(this.projects));
  }

  removeTask(task: Task, project: Project) {
    project.tasks.splice(project.tasks.indexOf(task), 1);

    window.localStorage.setItem('projects', JSON.stringify(this.projects));
  }
}
