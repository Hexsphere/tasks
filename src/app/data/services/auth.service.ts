import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../types/user';
import { AxiosService } from './axios.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private emptyUser: User = {
    _id: '',
    name: '',
    role: '',
    username: '',
    email: '',
    photo: '',
    projects: 0,
    tasks: 0,
    completedTasks: 0,
  };

  private user: BehaviorSubject<User> = new BehaviorSubject<User>(
    this.emptyUser
  );

  $user = this.user.asObservable();

  constructor(private axios: AxiosService) {}

  async checkForCredentials() {
    const { user } = await this.axios.makeRequest(
      'GET',
      '/users/checkForCredentials'
    );

    if (user) this.user.next(user);
  }

  async signup(payload: object) {
    const { user } = await this.axios.makeRequest(
      'POST',
      '/users/signup',
      payload
    );

    if (user) this.user.next(user);
  }

  async login(payload: object) {
    const { user } = await this.axios.makeRequest(
      'POST',
      '/users/signup',
      payload
    );

    if (user) this.user.next(user);
  }

  async logout() {
    const response = await this.axios.makeRequest('POST', '/users/signup');
    if (!environment.production) console.log(response);
  }
}
