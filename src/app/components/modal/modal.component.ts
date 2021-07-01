import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/data/services/project.service';
import { User } from 'src/app/data/types/user';
import { ModalService } from '../../data/services/modal.service';
import { Project } from '../../data/types/project';
import { AuthService } from './../../data/services/auth.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  showModal$ = this.modalService.showModal$;
  modalType$ = this.modalService.modalType$;
  user!: User;

  projects: Project[] = [];

  // ## INPUT DATA

  // New project data
  name: string = '';

  // Login data
  emailOrUsername: string = '';
  password: string = '';

  // Signup data
  firstName: string = '';
  lastName: string = '';
  username: string = '';
  email: string = '';
  passwordConfirm: string = '';

  constructor(
    private authService: AuthService,
    private modalService: ModalService,
    private projectService: ProjectService
  ) {}

  ngOnInit() {
    // this.modalService.$showModal.subscribe(
    //   (val: boolean) => (this.showModal = val)
    // );
    // this.modalService.$modalType.subscribe(
    //   (val: string) => (this.modalType = val)
    // );
    // this.authService.$user.subscribe((data: User) => (this.user = data));
  }

  setModal(type: string, show: boolean) {
    this.modalService.setModal(type, show);
  }

  addProject() {
    this.projectService.createProject(this.name, this.user._id);
    this.name = '';
    this.modalService.setModal('', false);
  }

  async login() {
    try {
      const payload = {
        emailOrUsername: this.emailOrUsername,
        password: this.password,
      };

      await this.authService.login(payload);

      if (this.user) {
        this.emailOrUsername = '';
        this.password = '';

        this.modalService.setModal('', false);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async signup() {
    const payload = {
      username: this.username,
      name: `${this.firstName} ${this.lastName}`,
      email: this.email,
      password: this.password,
      passwordConfirm: this.passwordConfirm,
    };

    await this.authService.signup(payload);

    if (this.user) {
      this.firstName = '';
      this.lastName = '';
      this.username = '';
      this.email = '';
      this.password = '';
      this.passwordConfirm = '';

      this.modalService.setModal('', false);
    }
    try {
    } catch (error) {
      console.error(error);
    }
  }
}
