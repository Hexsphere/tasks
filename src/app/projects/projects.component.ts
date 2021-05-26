
import { ProjectsService } from './../projects.service';
import { ModalService } from './../modal.service';
import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Project } from '../project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  modal: boolean = false;

  @Input() project!: Project;

  constructor(
    private modalService: ModalService,
    private projectsService: ProjectsService
  ) {}

  ngOnInit() {
    this.projects = this.projectsService.getProjects();
  }

  toggleModal(modal: boolean, type: string): void {
    this.modalService.setModal(modal);
    this.modalService.setModalType(type);
  }
}
