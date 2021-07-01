import { AuthService } from './data/services/auth.service';
import { ModalService } from './data/services/modal.service';
import { Component, OnInit } from '@angular/core';
import { User } from './data/types/user';
import { user } from './data/mock-data/user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // user!: User;

  user: User = user;

  constructor(
    private authService: AuthService,
    private modalService: ModalService
  ) {}

  async ngOnInit() {
    // await this.authService.checkForCredentials();
    // this.authService.$user.subscribe((data: User) => (this.user = data));
    if (!this.user) this.modalService.setModal('login', true);
  }
}
