import { user } from './../../data/mock-data/user';
import { environment } from 'src/environments/environment';
import { ModalService } from './../../data/services/modal.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/data/types/user';
import { AuthService } from './../../data/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  mini: boolean = false;

  // user!: User;
  // userFirstname!: string;
  // userPhotoURL!: URL;
  user: User = user;
  userFirstname: string = 'Ethan';
  userPhotoURL: URL = new URL(
    `${environment.serverURL}/img/users/${this.user.photo}`
  );

  constructor(
    private authService: AuthService,
    private modalService: ModalService
  ) {}

  ngOnInit() {
    // this.authService.$user.subscribe((data: User) => {
    //   if (data._id) this.user = data;
    //   if (this.user) {
    //     this.userFirstname = this.user.name.split(' ')[0];
    //     this.userPhotoURL = new URL(
    //       `${environment.serverURL}/img/users/${this.user.photo}`
    //     );
    //   }
    // });
  }

  toggleSidebar() {
    this.mini = !this.mini;
  }

  login() {
    this.modalService.setModal('login', true);
  }

  signup() {
    this.modalService.setModal('signup', true);
  }

  logout() {
    this.authService.logout();
  }
}
