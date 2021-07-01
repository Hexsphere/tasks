import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Project } from '../types/project';
import { Task } from '../types/task';
import { AxiosService } from './axios.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasksList: Task[] = [];
  private tasks: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([]);

  $tasks = this.tasks.asObservable();

  constructor(private axios: AxiosService) {}

  async createTask(project: string, user: string, name: string) {
    const payload = {
      project,
      user,
      name,
    };

    const { data: task } = await this.axios.makeRequest(
      'POST',
      '/tasks',
      payload
    );

    if (task) {
      this.tasksList.push(task);

      this.tasks.next(this.tasksList);
    }
  }

  async getTasks(project: Project | null = null) {
    const { data: tasks } = await this.axios.makeRequest('GET', `/tasks`, {
      project,
    });

    console.log(tasks);

    if (tasks) {
      this.tasksList = tasks;

      this.tasks.next(this.tasksList);
    }
  }

  async updateTask(currentTask: Task, payload: object) {
    const { data: task } = await this.axios.makeRequest(
      'PUT',
      `/tasks/${currentTask._id}`,
      payload
    );

    if (task) {
      this.tasksList.splice(this.tasksList.indexOf(currentTask), 1, task);

      this.tasks.next(this.tasksList);
    }
  }

  async deleteTask(task: Task) {
    const response = await this.axios.makeRequest(
      'DELETE',
      `/tasks/${task._id}`
    );

    if (response.status === 204) {
      const index = this.tasksList.findIndex((task) => task._id === task._id);

      this.tasksList.splice(index, 1);

      this.tasks.next(this.tasksList);
    }
  }
}
