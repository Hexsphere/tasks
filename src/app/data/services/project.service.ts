import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Project } from 'src/app/data/types/project';
import { User } from '../types/user';
import { AuthService } from './auth.service';
import { AxiosService } from './axios.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  user!: User;

  private projectsList: Project[] = [];
  private projects: BehaviorSubject<Project[]> = new BehaviorSubject<Project[]>(
    []
  );

  $projects = this.projects.asObservable();

  constructor(private axios: AxiosService, private authService: AuthService) {}

  async createProject(name: string, user: string) {
    const payload = {
      name,
      user,
    };

    const { data: project } = await this.axios.makeRequest(
      'POST',
      '/projects',
      payload
    );

    if (project) {
      this.projectsList.push(project);

      this.projects.next(this.projectsList);
    }
  }

  async getProjects() {
    const { data: projects } = await this.axios.makeRequest('GET', '/projects');

    if (projects) {
      this.projectsList = projects;

      this.projects.next(this.projectsList);
    }
  }

  async updateProject(currentProject: Project, payload: object) {
    const { data: project } = await this.axios.makeRequest(
      'PUT',
      `/projects/${currentProject._id}`,
      payload
    );

    if (project) {
      this.projectsList.splice(
        this.projectsList.indexOf(currentProject),
        1,
        project
      );

      this.projects.next(this.projectsList);
    }
  }

  async deleteProject(project: Project) {
    const response = await this.axios.makeRequest(
      'DELETE',
      `/projects/${project._id}`
    );

    if (response.status === 204) {
      this.projectsList.splice(this.projectsList.indexOf(project), 1);

      this.projects.next(this.projectsList);
    }
  }
}
