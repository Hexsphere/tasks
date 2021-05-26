import { ProjectsService } from './../projects.service';
import { Project } from './../project';
import { ModalService } from './../modal.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  modal: boolean = false;
  modalType: string = '';

  projects: Project[] = [];
  name: string = '';

  constructor(
    private modalService: ModalService,
    private projectsService: ProjectsService
  ) {}

  ngOnInit() {
    this.modalService.$modal.subscribe((val: boolean) => (this.modal = val));
    this.modalService.$modalType.subscribe(
      (val: string) => (this.modalType = val)
    );

    this.projects = this.projectsService.getProjects();
  }

  addProject() {
    this.projectsService.addProject(this.name);
    this.name = '';
    this.modalService.setModal(false);
  }
}
